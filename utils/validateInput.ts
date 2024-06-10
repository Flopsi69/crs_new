export default (value: string, type: string) => {
  if (value === '') return 'This field is required'

  if (type === 'name') {
    if (value.length < 6) return 'Name must be at least 6 characters long'
  }

  if (type === 'email') {
    if (value.length < 6) return 'Name must be at least 6 characters long'
    if (!value.includes('@')) return 'Email must contain an @'
    if (!value.includes('.')) return 'Email must contain a dot'

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email is invalid'
  }

  if (type === 'url') {
    if (value.length < 6) return 'URL must be at least 6 characters long'
    if (!value.includes('.')) return 'URL must contain a dot'
  }

  return ''
}
