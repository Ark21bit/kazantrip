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
        colors: {
            "primary": "#39919A",
            "mercury": "#ebebeb",
            "diamondBlack": "#28303F",
            "namaraGrey": "#7B7B7B",
            "second": "#4D4D4D",
            "lunarBase": "#868686",
            "inactive": "#C7C7C7",
            "offBlack": "#303030",
            "stellarExplorer": "#031F27",
        },
    },
    rules: [
        [/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })]
    ]
})