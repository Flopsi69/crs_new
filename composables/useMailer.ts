import { ref } from 'vue'

interface Lead {
  email: string
  name?: string
  url?: string
  annual_revenue?: string
  hear_about_us?: string
  project_goal?: string
  metadata?: {
    form_title?: string
    page?: string
    id?: string
  }
}

function getTemplate(lead: Lead, isPrelid: boolean) {
  let template = `
  === NEW LEAD ${isPrelid ? '(first step)' : ''} ===

  \t- Name: ${lead.name || '-'}
  \t- Company: ${lead.url || '-'}
  \t- Email: ${lead.email || '-'}
  `

  if (lead.annual_revenue) {
    template += `\n\t- Annual Revenue: ${lead.annual_revenue}`
  }
  if (lead.hear_about_us) {
    template += `\n\t- How did you hear about us: ${lead.hear_about_us}`
  }
  if (lead.project_goal) {
    template += `\n\t- Project Goal: ${lead.project_goal}`
  }

  template += `\n
  \t|-- Form Title: ${lead.metadata?.form_title || '-'}
  \t|-- Page: ${lead.metadata?.page || '-'}
  \t|-- ID: ${lead.metadata?.id || '-'}
  `

  return template
}

export function useMailer() {
  const mail = useMail()

  const data = ref<any>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const send = async (lead: any, isPrelid = false) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      // throw new Error('Not implemented yet')
      // getTemplate(lead)
      const subject = isPrelid ? 'New Lead (first step)' : 'New Lead'
      data.value = await mail.send({
        from: 'Conversionrate.store <analytics@conversionrate.store>',
        subject,
        text: getTemplate(lead, isPrelid)
      })

      return data.value
    } catch (err: any) {
      error.value = err

      return error.value
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    send
  }
}
