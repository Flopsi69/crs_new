export const useBlogApi = () => {
  const nuxtApp = useNuxtApp()

  const getPosts = (options = {}) =>
    useAsyncData(
      'posts-list',
      () => {
        return useApi().get('/case-studies/blog')
      },
      {
        ...options,
        getCachedData: (key) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
      },
    )

  const getPostBySlug = (slug: string, options = {}) =>
    useAsyncData(
      `post-${slug}`,
      () => {
        return useApi().get(`/case-studies/blog/${slug}`)
      },
      {
        ...options,
        getCachedData: (key) => {
          return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        },
      },
    )

  const getPostsSlugs = () =>
    useAsyncData(
      'posts-slugs-list',
      () => {
        return useApi().get('/case-studies/blog?select=url,status')
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
    getPosts,
    getPostBySlug,
    getPostsSlugs,
  }
}
