export const useCasesApi = () => {
  const nuxtApp = useNuxtApp()

  const getCases = (options = {}) =>
    useAsyncData(
      'cases-list',
      () => {
        return useApi().get('/case-studies')
      },
      {
        ...options,
        getCachedData: (key) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
      },
    )

  const getCaseBySlug = (slug: string, options = {}) =>
    useAsyncData(
      `case-${slug}`,
      () => {
        return useApi().get(`/case-studies/${slug}`)
      },
      {
        ...options,
        getCachedData: (key) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
      },
    )

  const getCasesSlugs = () =>
    useAsyncData(
      // 'cases-slugs-list',
      'cases-list',
      () => {
        return useApi().get('/case-studies')
      },
      {
        server: false,
        lazy: true,
        getCachedData: (key) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
      },
    )

  return {
    getCases,
    getCaseBySlug,
    getCasesSlugs,
  }
}
