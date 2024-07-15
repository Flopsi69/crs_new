import { google } from 'googleapis'
const config = useRuntimeConfig()

// interface Lead {
//   name?: string
//   url?: string
//   email?: string
//   monthly_revenue?: number
//   monthly_visitors?: number
//   project_goal?: string
//   title?: string
// }

async function sendToTelegram(text: string) {
  // Telegram bot details
  const botToken = config.telegram.botToken
  const chatId = config.telegram.chatId

  // Telegram API URL
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  const data = {
    chat_id: chatId,
    text
  }

  try {
    // Send POST request to Telegram API
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Return the API response
    return response
  } catch (error) {
    // Handle errors
    return {
      success: false,
      message: 'Failed to send message to Telegram',
      error
    }
  }
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return {
      status: 405,
      message: 'Only POST requests are allowed'
    }
  }

  if (!config.googleCredentials) {
    return {
      status: 500,
      message: 'Google credentials are not set'
    }
  }

  const { type, data } = await readBody(event)

  if (!type || !data) {
    return {
      status: 400,
      message: 'Invalid request body'
    }
  }

  const auth = new google.auth.GoogleAuth({
    credentials: config.googleCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
  const sheets = google.sheets({ version: 'v4', auth })

  const spreadsheetId = config.spreadsheetId

  let sheetName = 'crsNew2024'

  if (type === 'newsletter') {
    sheetName = 'newsletter'

    sendToTelegram(
      `New newsletter subscriber:\n\nEmail: ${data.email}\nName: ${data.name}`
    )
  }

  const range = sheetName + '!A1:F1'

  const date = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })

  const {
    name,
    url,
    email,
    monthly_revenue,
    monthly_visitors,
    project_goal,
    title
  } = data

  let values = null

  if (type === 'newsletter') {
    values = [date, email || '-', name || '-', title || '-']
  } else {
    values = [
      date,
      email || '-',
      name || '-',
      url || '-',
      monthly_revenue || '-',
      monthly_visitors || '-',
      project_goal || '-',
      title || '-'
    ]
  }

  try {
    // @ts-ignore
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [values]
      }
    })

    return {
      status: 200,
      message: 'Form data saved successfully!',
      response
    }
  } catch (error) {
    return {
      status: 500,
      message: 'Error saving form data',
      error
    }
  }
})
