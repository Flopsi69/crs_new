interface Lead {
  email: string
  name?: string
  url?: string
  monthly_traffic?: string
  monthly_revenue?: string
  hear_about_us?: string
  project_goal?: string
  metadata?: {
    form_title?: string
    page?: string
    id?: string
  }
}

function getTemplate(lead: Lead, isPrelid: boolean, isHTML = false): string {
  const isAdditional =
    lead.monthly_revenue || lead.hear_about_us || lead.project_goal

  const template = `
    <p><strong>=== NEW LEAD ${isPrelid ? '(first step)' : ''} ===</strong></p>
    <div>\t- Name: ${lead.name || '-'}</div>
    <div>\t- Company: ${lead.url || '-'}</div>
    <div>\t- Email: ${lead.email || '-'}</div>
    ${isAdditional ? `<br/>` : ''}
    ${
      lead.monthly_traffic
        ? `<div>\t- Monthly Traffic: ${lead.monthly_traffic}</div>`
        : ''
    }
    ${
      lead.monthly_revenue
        ? `<div>\t- Monthly Revenue: ${lead.monthly_revenue}</div>`
        : ''
    }
    ${
      lead.hear_about_us
        ? `<div>\t- How did you hear about us: ${lead.hear_about_us}</div>`
        : ''
    }
    ${
      lead.project_goal
        ? `<div>\t- Project Goal: ${lead.project_goal}</div>`
        : ''
    }
    <br/>
    <div>\t|-- Form Title: ${lead.metadata?.form_title || '-'}</div>
    <div>\t|-- Page: ${lead.metadata?.page || '-'}</div>
    <div>\t|-- ID: ${lead.metadata?.id || '-'}</div>
  `

  return isHTML ? template : template.replace(/<[^>]*/g, '')
}

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return {
      status: 405,
      message: 'Only POST requests are allowed'
    }
  }

  if (!config.resend?.apiKey) {
    return {
      status: 500,
      message: 'Resend API key is missing'
    }
  }

  const { emails } = useResend()

  const { lead, isPrelid }: { lead: Lead; isPrelid: boolean } = await readBody(
    event
  )

  const mailInfo = {
    from: 'Conversionrate.store <analytics@conversionrate.store>',
    to: [
      'al@conversionrate.store',
      'g@conversionrate.store',
      'i@conversionrate.store'
    ],
    subject: isPrelid ? 'New Lead (first step)' : 'New Lead',
    html: getTemplate(lead, isPrelid, true),
    text: getTemplate(lead, isPrelid)
  }

  const result = await emails.send(mailInfo)

  return result
})
