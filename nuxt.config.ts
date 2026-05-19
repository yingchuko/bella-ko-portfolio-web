// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Cormorant Garamond': [300, 400, 500, 600, 700],
      'Inter': [300, 400, 500, 600, 700],
      'IBM Plex Mono': [400, 500],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Digital Zen | Portfolio',
      meta: [
        { name: 'description', content: 'Crafting Digital Serenity - A minimalist portfolio experience' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F5F5F3' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
