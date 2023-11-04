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
    highlight: {
      theme: 'github-dark'
    },
    experimental: {
      // Experimental static generating, will official support in next major version
      // Checkout https://github.com/nuxt/content/issues/1746#issuecomment-1346737779
      clientDB: true
    },
  },
  // Generate static site for GitHub Pages
  ssr: false,
  app:{
    buildAssetsDir: "/static/",
    head: {
      link: [
        { rel: 'preconnect',  href: 'https://rsms.me/' },
        { rel: 'stylesheet',  href: 'https://rsms.me/inter/inter.css' },
        
        // or use fonts.proxy.ustclug.org
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap' },
      ],
    },
  },
})
