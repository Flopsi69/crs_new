import { ref } from 'vue'

interface Body {
  audience: 'lead' | 'newsletter' | 'prelead'
  data: {
    name: string
    email: string
    title?: string
  }
}

export function useExcel() {
  const url = '/api/saveToGoogleSheet'

  const data = ref<any>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const save = async (body: Body) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      data.value = await $fetch(url, {
        method: 'POST',
        body
      })

      // console.log('Succefully saved data to Google Sheets:', data.value)

      return data.value
    } catch (err: any) {
      console.error('Error saving data to Mailchimp:', err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    save
  }
}
