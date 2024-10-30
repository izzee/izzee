// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-svgo-loader'],

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
  }
})