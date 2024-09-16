export const useToast = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$toast as any
}
