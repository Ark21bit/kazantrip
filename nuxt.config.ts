// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@unocss/nuxt", "nuxt-icon"],
    components: [
        { path: "~/components/atoms", pathPrefix: false },
        "~/components/reviews",
        "~/components",
        { path: "~/components/global", global: true },
    ],
    css: ["~/assets/css/main.css"],
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) =>
                ["swiper-container", "swiper-slide"].includes(tag),
        },
    },
})
