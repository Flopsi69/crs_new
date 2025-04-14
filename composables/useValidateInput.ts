import { useI18n } from 'vue-i18n'

export const useValidateInput = () => {
  const { t } = useI18n()

  const validateInput = (value: string, type: string) => {
    if (value === '') return t('validation.required')

    if (type === 'name') {
      if (value.length < 3) return t('validation.name.minLength')
    }

    if (type === 'email') {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false)
        return t('validation.email.invalid')
      if (!value.includes('@')) return t('validation.email.missingAt')
      if (!value.includes('.')) return t('validation.email.missingDot')
    }

    if (type === 'url') {
      if (value.length < 6) return t('validation.url.minLength')
      if (!value.includes('.')) return t('validation.url.missingDot')
    }

    return ''
  }

  return { validateInput }
}
