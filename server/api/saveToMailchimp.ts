const config = useRuntimeConfig()

type Audience = 'leads' | 'newsletter'
type Data = {
  name: string
  email: string
  title: string
}

async function saveToMailChimp(
  audienceId: string,
  { name, email, title }: Data
) {
  const url = `https://${config.mailchimp.serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name,
      MMERGE6: title
    }
  }

  try {
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          'anystring:' + config.mailchimp.apiKey
        ).toString('base64')}`
      },
      body: JSON.stringify(data)
    })

    return {
      status: 200,
      message: 'Form data saved successfully!',
      response
    }
  } catch (error) {
    return {
      status: 500,
      message: 'Failed to save contact to MailChimp',
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

  if (!config.mailchimp || !config.mailchimp.apiKey) {
    return {
      status: 500,
      message: 'MailChimp API key is missing'
    }
  }

  const { audience, data }: { audience: Audience; data: Data } = await readBody(
    event
  )

  if (!audience || !data) {
    return {
      status: 400,
      message: !audience ? 'Audience is required' : 'Invalid request body'
    }
  }

  let audienceId = config.mailchimp.audienceLeadsId

  if (audience === 'newsletter') {
    audienceId = config.mailchimp.audienceNewsletterId
  }

  const res = await saveToMailChimp(audienceId, data)

  return res
})
