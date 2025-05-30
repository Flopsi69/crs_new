export const useApi = () => {
  const config = useRuntimeConfig()

  const baseURL =
    (config.public.apiBase as string) ??
    'https://stageserver.conversionrate.store/api'

  const $apiFetch = $fetch.create({
    baseURL,
    ...(import.meta.dev
      ? {
          onResponse({ response }) {
            console.info('onResponse ', {
              endpoint: response.url,
              status: response?.status
            })
          }
        }
      : {})
  })

  return {
    get: <T = any>(url: string, options = {}) =>
      $apiFetch<T>(url, { ...options, method: 'GET' }),
    post: <T = any>(url: string, body: any, options = {}) =>
      $apiFetch<T>(url, { ...options, method: 'POST', body })
  }

  // const get = async <T>(url: string, options: any = {}): Promise<T> => {
  //   const { data, error } = await useFetch<T>(url, {
  //     baseURL,
  //     method: 'GET',
  //     ...options
  //   })
  //   if (error.value)
  //     throw createError({
  //       statusCode: error.value.statusCode,
  //       statusMessage: error.value.message
  //     })
  //   return data as ref<T>
  // }

  // const post = async <T>(
  //   url: string,
  //   body: any,
  //   options: any = {}
  // ): Promise<T> => {
  //   const { data, error } = await useFetch<T>(url, {
  //     baseURL,
  //     method: 'POST',
  //     body,
  //     ...options
  //   })
  //   if (error.value)
  //     throw createError({
  //       statusCode: error.value.statusCode,
  //       statusMessage: error.value.message
  //     })
  //   return data as ref<T>
  // }

  // return {
  //   get,
  //   post
  // }
}
