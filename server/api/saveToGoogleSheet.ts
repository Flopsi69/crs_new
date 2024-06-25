import { google } from 'googleapis'

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

  console.log({
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: '116906147343419850380'
  })

  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: '116906147343419850380'
    },
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
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: '116906147343419850380'
      },
      error
    }
  }
})
