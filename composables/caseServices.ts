// services/PostService.ts
export const useCaseService = () => {
  const { get } = useApi()

  const getCases = (queries?: string) => {
    const queryString = queries ? `?select=${queries}` : ''

    return get<any[]>(`/case-studies${queryString}`)
  }
  const getCase = (slug: string) => get<any[]>(`/case-studies/${slug}`)
  // const fetchPostById = (id: number) => get<Post>(endpoints.postById(id))
  // const createPost = (data: Partial<Post>) => post<Post>(endpoints.createPost, data)

  return {
    getCases,
    getCase
  }
}
