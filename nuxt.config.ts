// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: import.meta.dev },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Cormorant Garamond': [300, 400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700],
      'IBM Plex Mono': [400, 500],
    },
    display: 'swap',
    preload: true,
    prefetch: false,
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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/gsap')) return 'gsap'
          },
        },
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
