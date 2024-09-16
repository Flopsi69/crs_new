import { ref } from 'vue'

interface Lead {
  email: string
  name?: string
  url?: string
  monthly_revenue?: string
  monthly_visitors?: string
  project_goal?: string
  metadata?: {
    form_title?: string
    page?: string
    id?: string
  }
}

function getTemplate(lead: Lead) {
  let template = `
  === NEW LEAD ===

    - Name: ${lead.name || '-'}
    - Company: ${lead.url || '-'}
    - Email: ${lead.email || '-'}
  `

  if (lead.monthly_revenue) {
    template += `  - Monthly Revenue: ${lead.monthly_revenue}`
  }
  if (lead.monthly_visitors) {
    template += `  - Monthly Visitors: ${lead.monthly_visitors}`
  }
  if (lead.project_goal) {
    template += `  - Project Goal: ${lead.project_goal}`
  }

  template += `
    |-- Form Title: ${lead.metadata?.form_title || '-'}
    |-- Page: ${lead.metadata?.page || '-'}
    |-- ID: ${lead.metadata?.id || '-'}
  `

  return template
}

export function useMailer() {
  const mail = useMail()

  const data = ref<any>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const send = async (lead: any) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      // throw new Error('Not implemented yet')
      // getTemplate(lead)
      data.value = await mail.send({
        from: 'Conversionrate.store <analytics@conversionrate.store>',
        subject: 'Lead from the website',
        text: getTemplate(lead)
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
