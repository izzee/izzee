// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-svgo-loader',
    '@nuxt/content',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'portfolio of isaac chabon' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true }
  },

  css: [
    '@/styles/globals.scss'
  ],

  vite: {
    css: { 
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/_variables.scss" as *;',
        },
      },
    },
  },

  googleFonts: {
    families: {
      Inter: '300..700'
    }
  },

})
