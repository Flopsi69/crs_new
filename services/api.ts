const baseURL = 'https://stageserver.conversionrate.store/api'

// Nuxt 3 uses $fetch for making HTTP requests
const apiClient = $fetch.create({
  baseURL,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// GET Request
const getCases = async (
  queries?: string,
  options: Record<string, any> = {}
): Promise<any> => {
  let url = '/case-studies'
  if (queries) {
    url += `?select=${queries}`
  }

  try {
    const response = await useFetch(url, {
      baseURL,
      method: 'GET',
      ...options
    })

    console.log('resApi', response.data.value)

    return response.data
  } catch (error) {
    console.error('GET request error:', error)
    throw error
  }
}

const getCase = async (
  id: string | number | string[],
  options: Record<string, any> = {}
): Promise<any> => {
  try {
    if (Array.isArray(id)) {
      throw new Error('Invalid id type')
    }
    const response = await useFetch(`/case-studies/${id}`, {
      baseURL,
      method: 'GET',
      ...options
    })

    console.log('resApi', response.data.value)

    return response.data
  } catch (error) {
    console.error('GET request error:', error)
    throw error
  }
}

// Example GET request
const getResource = async (endpoint: string): Promise<any> => {
  try {
    return await apiClient(endpoint)
  } catch (error) {
    console.error('Error fetching resource:', error)
    throw error
  }
}

// Example POST request
const createResource = async (endpoint: string, data: any): Promise<any> => {
  try {
    return await apiClient(endpoint, {
      method: 'POST',
      body: data
    })
  } catch (error) {
    console.error('Error creating resource:', error)
    throw error
  }
}

// Example PUT request
const updateResource = async (endpoint: string, data: any): Promise<any> => {
  try {
    return await apiClient(endpoint, {
      method: 'PUT',
      body: data
    })
  } catch (error) {
    console.error('Error updating resource:', error)
    throw error
  }
}

// Example DELETE request
const deleteResource = async (endpoint: string): Promise<any> => {
  try {
    return await apiClient(endpoint, {
      method: 'DELETE'
    })
  } catch (error) {
    console.error('Error deleting resource:', error)
    throw error
  }
}

const api = {
  getCases,
  getCase,
  getResource,
  createResource,
  updateResource,
  deleteResource
}

export default api
