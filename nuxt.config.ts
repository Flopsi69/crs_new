import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: { lang: 'en' },
      title: 'Conversion Rate Store'
    }
  },

  modules: [
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    'nuxt-icon',
    'nuxt-aos',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  // '@vee-validate/nuxt',
  // 'radix-vue',

  gtm: {
    id: 'GTM-MR6SLVZ6',
    source: 'https://yfduetmi.euw.stape.io/yfduetmi.js',
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
