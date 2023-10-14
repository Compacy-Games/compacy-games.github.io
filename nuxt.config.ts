// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  css: [
    '~/assets/css/font.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
  },
  ssr: false,
})
