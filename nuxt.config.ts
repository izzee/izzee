// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],

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
      Inter: '200..700'
    }
  }
})