// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.css', '@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify'],
    },
})
