export const useApi = () => {
  const config = useRuntimeConfig()

  const baseURL =
    config.public.apiBase ?? 'https://stageserver.conversionrate.store/api'

  const get = async <T>(url: string, options: any = {}): Promise<T> => {
    const { data, error } = await useFetch<T>(url, {
      baseURL,
      method: 'GET',
      ...options
    })
    if (error.value)
      throw createError({
        statusCode: error.value.statusCode,
        statusMessage: error.value.message
      })
    return data.value as T
  }

  const post = async <T>(
    url: string,
    body: any,
    options: any = {}
  ): Promise<T> => {
    const { data, error } = await useFetch<T>(url, {
      baseURL,
      method: 'POST',
      body,
      ...options
    })
    if (error.value)
      throw createError({
        statusCode: error.value.statusCode,
        statusMessage: error.value.message
      })
    return data.value as T
  }

  return {
    get,
    post
  }
}
