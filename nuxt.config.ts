// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: [
    '@/assets/fonts.css',
    '@/assets/global.css'
  ],
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  }
})