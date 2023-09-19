// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../btr-layouts'
  ],
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false
    },
    {
      path: '../btr-layouts/components', // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],
  typescript: {
    strict: true
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-vitest'
  ],
  eslint: {
    /* module options */
    lintOnStart: false,
    include: ['/**/*.{js,jsx,ts,tsx,vue}']
  },
  stylelint: {
    /* module options */
    lintOnStart: false
  },
  pinia: {
    /* pinia module options */
  }
})
