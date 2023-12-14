import { defineConfig, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import formKitUnocssPlugin from "@formkit/themes/unocss"
export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                Onest: { name: "Onest", weights: [400, 500, 600, 700, 800, 900] },
                Montserrat: { name: "Montserrat", weights: [400, 500, 600, 700, 800, 900] }
            },
        }),
        formKitUnocssPlugin()
    ],
    content: {
        pipeline: {
            include: [
                /\.(vue)($|\?)/,
                './FormkitTheme.js'
            ]
        }
    },
    blocklist: [
        'container'
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    theme: {
        transitionTimingFunction: {
            DEFAULT: 'linear'
        },
        transitionDuration: {
            DEFAULT: "500ms"
        },
        colors: {
            "primary": "#39919A",
            "mercury": "#ebebeb",
            "fblack": "#28303F",
            "namaraGrey": "#7B7B7B",
            "second": "#4D4D4D",
            "lunarBase": "#868686",
            "inactive": "#C7C7C7",
            "offBlack": "#303030",
            "stellarExplorer": "#031F27",
        },
        boxShadow: {
            base: 'var(--un-shadow-inset) 0 4px 19px 0 var(--un-shadow-color, rgb(0 0 0 / 0.04)),var(--un-shadow-inset) 0px 12px 35px 0px var(--un-shadow-color, rgb(0 0 0 / 0.04))'
        },
        breakpoints: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            'xl': '1280px',
            '2xl': '1536px',
            "3xl": '1920px',
        },
    },
    rules: [
        [/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })]
    ]
})