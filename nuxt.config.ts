import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // experimental: {
  //   // @ts-ignore
  //   inlineSSRStyles: false
  // },

  // routeRules: {
  // '/case-studies/:id': { prerender: true },
  // '/': { prerender: true }
  // },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: { lang: 'en' },
      title: 'Conversion Rate Store',
      meta: [
        {
          name: 'google-site-verification',
          content: 'Fn7FA9pzNzwU-HJR8v8udMGPONHkfD6fdENRnUt1-ps'
        }
      ]
    }
  },

  modules: [
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    'nuxt-icon',
    'nuxt-aos',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-mail',
    'nuxt-schema-org'
  ],

  // '@vee-validate/nuxt',
  // 'radix-vue',

  mail: {
    message: {
      to: 'al@conversionrate.store,g@conversionrate.store,i@conversionrate.store'
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    }
  },

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
  },

  runtimeConfig: {
    mailchimp: {
      serverPrefix: 'us17',
      audienceNewsletterId: process.env.MAILCHIMP_AUDIENCE_NEWSLETTER_ID,
      audienceLeadsId: process.env.MAILCHIMP_AUDIENCE_LEADS_ID,
      apiKey: process.env.MAILCHIMP_API_KEY
    },
    telegram: {
      botToken: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID
    },
    spreadsheetId: process.env.GOOGLE_SPREEDSHEET_ID,
    googleCredentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: '116906147343419850380'
    },
    email: {
      user: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASSWORD
    }
  },

  compatibilityDate: '2025-02-20'
})