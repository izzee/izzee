// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-svgo-loader',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The homepage of web developer, designer, and artist Isaac Chabon' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      script: [
        {
          src: 'https://raw.githack.com/Qwuke/recurse-ring/main/static/ring.js',
          async: true
        }
      ]
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true }
  },

  css: [
    '@/styles/globals.scss'
  ],
  postcss: {
    plugins: {
      cssnano: {
        preset: ['default', { normalizeUrl: false }], // Disable URL normalization
      },
    },
  },

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
  
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light',
    }
     
  },

  nitro: {
    prerender: {
      routes: ['/feed.xml'],
    }
  },

  image: {
    uploadcare: {
      cdnURL: '/',
    }
  },


})
