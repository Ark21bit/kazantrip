// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		vue: {
			script: {
				defineModel: true,
			}
		},
	},
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "@nuxtjs/i18n", "@formkit/nuxt", "@pinia/nuxt", 'dayjs-nuxt', '@vueuse/nuxt', 'vue-yandex-maps/nuxt', 'yandex-metrika-module-nuxt3'],
	components: [
		{ path: "~/components/atoms", pathPrefix: false },
		"~/components",
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
		link: [
			{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
			{ rel: "icon", type: "image/png", sizes: "512x512", href: "/favicons/512.png" },
			{ rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/192.png" },
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/32.png" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/16.png" }
		],
		head: {
			bodyAttrs: {
				class: 'group/body'
			}
		},
	},
	yandexMaps: {
		apikey: process.env?.YANDEX_MAPS_API_KEY ?? '',
	},
	yandexMetrika: {
		id: process.env.YANDEX_METRIKA_ID,
		consoleLog: false,
		webvisor: true,
	}
})