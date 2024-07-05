import { google } from 'googleapis'
const config = useRuntimeConfig()

interface Body {
  name?: string
  url?: string
  email?: string
  monthly_revenue?: number
  monthly_visitors?: number
  project_goal?: string
  title?: string
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

  const body: Body = await readBody(event)
  const {
    name,
    url,
    email,
    monthly_revenue,
    monthly_visitors,
    project_goal,
    title
  } = body

  const auth = new google.auth.GoogleAuth({
    credentials: config.googleCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const spreadsheetId = '1gIPaRJiN44aWbPftGZ_EWTiZvcmDek3u5QaTeMhIlr0'
  const range = 'crsNew2024!A1:F1'

  const values = [
    new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' }),
    email || '-',
    name || '-',
    url || '-',
    monthly_revenue || '-',
    monthly_visitors || '-',
    project_goal || '-',
    title || '-'
  ]

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
