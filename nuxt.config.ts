// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@unocss/nuxt", "nuxt-icon", "@nuxtjs/i18n", "@formkit/nuxt", "@pinia/nuxt", 'dayjs-nuxt', '@vueuse/nuxt'],
    components: [
        { path: "~/components/atoms", pathPrefix: false },
        "~/components",
        { path: "~/components/global", global: true },
    ],
    css: ['swiper/css', "~/assets/css/main.css"],
    runtimeConfig: {
        public: {
            APIbaseURL: process.env.APP_URL_BACKEND
        }
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
    },
    dayjs: {
        locales: ['en', 'ru'],
        plugins: ['utc', 'timezone', 'localizedFormat'],
        defaultLocale: 'ru',
        defaultTimezone: 'Europe/Moscow',
    },
    build: {
        transpile: ['@vuepic/vue-datepicker']
    },
    app: {
        head: {
            bodyAttrs: {
                class: 'group/body'
            }
        },
    }
})