// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@unocss/nuxt", "nuxt-icon", "@nuxtjs/i18n", "@formkit/nuxt"],
    components: [
        { path: "~/components/atoms", pathPrefix: false },
        "~/components",
        { path: "~/components/global", global: true },
    ],
    css: ['@splidejs/vue-splide/css/core', "~/assets/css/main.css"],
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
    },
})