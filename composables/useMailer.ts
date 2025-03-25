import { ref } from 'vue'

export function useMailer() {
  const url = '/api/sendMail'

  const data = ref<any>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const send = async (lead: any, isPrelid = false) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      data.value = await $fetch(url, {
        method: 'POST',
        body: {
          lead,
          isPrelid
        }
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
