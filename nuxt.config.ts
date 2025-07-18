import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  features: {
    // inlineStyles: false // or a function to determine inlining
  },

  telemetry: {
    enabled: false
  },

  site: {
    url: 'https://conversionrate.store',
    name: 'Conversion Rate Store'
  },

  // experimental: {
  //   // @ts-ignore
  //   inlineSSRStyles: false
  // },

  // ...(process.env.NODE_ENV !== 'development' && {
  routeRules: {
    '/case-studies': { swr: 60 * 5 },
    '/case-studies/**': { swr: 60 * 5 }
  },

  // nitro: {
  //   prerender: {
  //     routes: ['/sitemap.xml', '/sitemap_index.xml']
  //   }
  // },

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: { lang: 'en' },
      title: 'Performance-Based CRO Agency: Pay Only for Actual Results',
      titleTemplate: '%s',
      meta: [
        {
          name: 'google-site-verification',
          content: 'Fn7FA9pzNzwU-HJR8v8udMGPONHkfD6fdENRnUt1-ps'
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@zadigetvoltaire/nuxt-gtm',
    'vue3-carousel-nuxt',
    '@formkit/auto-animate/nuxt',
    'nuxt-resend',
    'nuxt-aos'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        nameEnglish: 'English',
        language: 'en',
        file: 'en/en.json'
      }
      // {
      //   code: 'de',
      //   name: 'Deutsch',
      //   nameEnglish: 'German',
      //   language: 'de-DE',
      //   file: 'de/index.json'
      // },
      // {
      //   code: 'es',
      //   name: 'Español',
      //   nameEnglish: 'Spanish',
      //   language: 'es-ES',
      //   file: 'es/index.json'
      // },
      // {
      //   code: 'fr',
      //   name: 'Français',
      //   nameEnglish: 'French',
      //   language: 'fr-FR',
      //   file: 'fr/index.json'
      // }
    ],
    compilation: {
      strictMessage: false,
      escapeHtml: false
    },
    bundle: {
      fullInstall: false,
      optimizeTranslationDirective: false
    },
    baseUrl: 'https://conversionrate.store',
    defaultLocale: 'en',
    debug: false,
    lazy: true
    // langDir: './locales/'
    // restructureDir: ''
  },

  gtm: {
    id: 'GTM-MR6SLVZ6',
    defer: true,
    compatibility: true,
    debug: process.env.NODE_ENV !== 'production' ? false : false,
    devtools: process.env.NODE_ENV !== 'production' ? false : false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },

  css: ['~/assets/styles/global.scss'],

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
    resend: {
      apiKey: process.env.RESEND_API_KEY
    }
  },

  sitemap: {
    exclude: ['/case-studies/dev', '/index-old', '/about-us'],
    sitemaps: {
      pages: {
        includeAppSources: true,
        // defaults: {
        //   changefreq: 'daily', // or 'weekly', 'monthly', etc.
        //   priority: 1
        // },
        urls: [{ loc: '/cro-audit/' }, { loc: '/career/' }]
      },
      cases: {
        defaults: {
          changefreq: 'daily', // or 'weekly', 'monthly', etc.
          priority: 0.7
        },
        async urls() {
          const res = await fetch(
            'https://stageserver.conversionrate.store/api/case-studies?select=url,status'
          )

          const urlsRaw = await res.json()

          return urlsRaw
            .filter((i) => i.status !== 'INACTIVE')
            .map((i: { url: string }) => ({
              loc: `/case-studies/${i.url}`
            }))
        }
      },
      blog: {
        defaults: {
          changefreq: 'daily', // or 'weekly', 'monthly', etc.
          priority: 0.7
        },
        async urls() {
          const res = await fetch(
            'https://stageserver.conversionrate.store/api/case-studies/blog?select=url,status'
          )

          const urlsRaw = await res.json()

          return urlsRaw
            .filter((i) => i.status === 'ACTIVE')
            .map((i: { url: string }) => ({
              loc: `/blog/${i.url}`
            }))
        }
      }
    }
  },

  compatibilityDate: '2025-05-15'
})
