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

  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: 'conversionrate-336512',
      private_key_id: '12fb0e153716952989f9de36a1782c47e3c1c41c',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDe1eoM/o4oJ8le\ntCSPsZRPTlcV35NJdRTmPe3rs1tbwjxGkpPD4O91lw4zB+vgtrRuaRj2Q/M8RATy\nR7ScUJwS/+KsUSLU9rq8mBUkPpPWCe6wefcvGCBRPlePARZrt2JfY4J1Xfew9Wdi\n5DvRhdm1OSAyQp6Ilrq6q9JFZ4a84NlIhBvCgu/XxMC9QZOleu3vDcFp0kCIiGB3\nH5whQxKfo+Fr4ttoPpDa4E6mEwAivgptnAwfDX76rKZL/x2VUGgHxzAqB2T8tD7g\noPYIfLv0FP/0O7SkL5DBpcderYG0jp+8yQptDfXku7RFQQZ7b7X1WNLhDunEAsQz\n1LRuTjS/AgMBAAECggEAISA+u3DKFDkZ69yuxLe62vFD6+oBHL3tfe695DiU/7aH\nvFwE4G0bW+k5QKfQTmcKupEgF1fxnEdmTtgPBt/K294zRbeIDI2jI+8d0XYGBx8R\n3yU6dENLZph0brtUKG4qDxEdbzIpZKKOnHpeVB7oRtL3sNELfTWfC6oIR64EryYc\nvBgQgxIBUQwuaIkHiyBD6bD3MsjDRv3A0S40jkqIfXtq6ImKYOEDW2uKvKAIurXX\nP8ve1ZHCm+TbklQWYXkaALVYtngNZ6zujmlqn/gv+uvWPCzVDIcxMT/7OG+bACs+\nZzxtXhKcDlc/tBiqKXupQH8CWq2lSQ2rLFIzPUkgEQKBgQD7Xi1dIzFVQccdz5VG\nyQNvyTZkeV32WUzmK8Y5sJzdd+spKmXYNZwDReIwQUE9nlJnfiV+gmNrnM4D7+JW\nNxQxFHYYCm92W1fw02PBVpr0K1WONeI1xfTA7Zo7wkiwTUtF6827pz5fdtT+yEbL\nBnf2eh837s2617PibIMyHdFrMQKBgQDi8SL6FTH7n8QGrpJFa7tgnTFgY1mNPFtR\nHuAZO8PkkHnKRQYc7LqXB7twC0ZQSU8xbg+LndTImwrijHhputJEl8/5FRomNmfm\nYaPrkevfOFYY44rZrwsxWwKqJYKDIZjrNJZxMfCWcZkjoXdNXEx1J16UlRqfkNPI\nfNPW6ZDC7wKBgDUOftK+3+XX+XhQXXjQavpIZUO13mBmHvYiXTfGEIYqjqdkvJRz\nVFfYg1KeI3AnH8uac72NNgD72vw3wPVjsM5fPEH8yeQYiapaZB7l8dUB5JAczX9+\nJhgmzrw4WPFljzLV/9nRBjhOM80HZvHpjp6mzjoXHLOIXf632sVUR+SxAoGABT09\n6nocyktY8jKLi/C9xbA7WJdSlPEkxo2o7Mw1bIxtU18ekgJhGGWETUTlXasjmeeJ\nklaVeAAkUzCdAwveGNlMYtq63ND6uxXb++9Fe8TIMBDovrfM0VnhiN4O0kovRpbT\nNk/J1x9OQsVShMWxui6rf1Cl6bMlQIapOVfxEJ8CgYBsbHyetWlQqY11Pe03ccgq\nKO04EX2uV5eozlmhkplmGEmyvWUJYajNxq4yeD8E2GBAqWwUgmHPpvCSfPGkRjsk\nAqwhbTjLukdzb0AICysNA1e32wXFnMfnhFbFNDXt9zDMx1ARyI5WRJ9+MSJP8xGK\n/DSdflO02Q4AKrbXkA68Bw==\n-----END PRIVATE KEY-----\n',
      client_email:
        'phpsheetconnect@conversionrate-336512.iam.gserviceaccount.com',
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
      error
    }
  }
})
