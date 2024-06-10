import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
    }
  },

  modules: [
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    'radix-vue',
    'nuxt-icon',
    'nuxt-aos',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  // '@vee-validate/nuxt',

  gtm: {
    id: 'GTM-TLSMF6T',
    defer: true,
    compatibility: true,
    debug: false,
    devtools: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },

  alias: {
    img: fileURLToPath(new URL('./assets/images', import.meta.url))
  }
})
