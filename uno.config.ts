import { defineConfig, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup, presetIcons } from 'unocss'
import formKitUnocssPlugin from "@formkit/themes/unocss"
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                Onest: { name: "Onest", weights: [300, 400, 500, 600, 700] },
                Montserrat: { name: "Montserrat", weights: [600, 700] }
            },
        }),
        formKitUnocssPlugin(),
        presetIcons({
            collections: {
                custom: FileSystemIconLoader(
                    './assets/iconsUnoCSS',
                    svg => svg.replace(/#fff/, 'currentColor')
                ),
                "eos-icons": {
                    loading: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>'
                },
                "material-symbols": {
                    "star-rounded": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.437t-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15z"/></svg>',
                    "close-rounded": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>'
                },
                bxs: {
                    "error-alt": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM13 17h-2v-2h2zm0-4h-2V7h2z"/></svg>'
                },
                "icon-park-outline": {
                    telegram: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect x="0" y="0" width="48" height="48" fill="none" stroke="none" /><path fill="currentColor" d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"/></svg>'
                },
                "healthicons": {
                    "geo-location": '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085c.1-.074.246-.182.43-.324c.368-.282.89-.697 1.513-1.23a43.403 43.403 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.962 13.962 0 0 0 24 6a13.962 13.962 0 0 0-9.902 4.125A14.117 14.117 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.403 43.403 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a25.536 25.536 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clip-rule="evenodd"/></svg>'
                }
            },
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        })
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