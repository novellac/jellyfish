import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    '/@': './',
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/night-owl.min.css"
      }
    ]
  },
  publicRuntimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
    // ...
  ],
  buildModules: ['nuxt-windicss'],
  css: ['~/styles/base.css'],
})
