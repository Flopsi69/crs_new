// services/apiService.js
export default function useApiService() {
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
  const getCases = async (options = {}) => {
    try {
      const { data } = await useFetch('/case-studies', {
        baseURL,
        method: 'GET',
        ...options
      })

      console.log(data.value)

      return data.value
    } catch (error) {
      console.error('GET request error:', error)
      throw error
    }
  }

  // Example GET request
  const getResource = async (endpoint) => {
    try {
      return await apiClient(endpoint)
    } catch (error) {
      console.error('Error fetching resource:', error)
      throw error
    }
  }

  // Example POST request
  const createResource = async (endpoint, data) => {
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
  const updateResource = async (endpoint, data) => {
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
  const deleteResource = async (endpoint) => {
    try {
      return await apiClient(endpoint, {
        method: 'DELETE'
      })
    } catch (error) {
      console.error('Error deleting resource:', error)
      throw error
    }
  }

  return {
    getCases,
    getResource,
    createResource,
    updateResource,
    deleteResource
  }
}
