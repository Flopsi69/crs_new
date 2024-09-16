import { google } from 'googleapis'
const config = useRuntimeConfig()

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

  const { audience, data } = await readBody(event)

  if (!audience || !data) {
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

  if (audience === 'newsletter') {
    sheetName = 'newsletter'
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

  if (audience === 'newsletter') {
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
