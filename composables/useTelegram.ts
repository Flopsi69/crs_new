import { ref } from 'vue'

interface Body {
  name: string
  email: string
}

export function useTelegram() {
  const url = '/api/sendTelegramMessage'

  const data = ref<any>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const send = async (body: Body) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      // throw new Error('Not implemented yet')
      data.value = await $fetch(url, {
        method: 'POST',
        body
      })

      console.log('Succefully send to telegram')

      return data.value
    } catch (err: any) {
      console.error('Error sending message to Telegram::', err)
      error.value = err
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
