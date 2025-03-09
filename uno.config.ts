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
                    "close-rounded": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>',
                    "info": '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>',
                },
                bxs: {
                    "error-alt": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM13 17h-2v-2h2zm0-4h-2V7h2z"/></svg>'
                },
                "icon-park-outline": {
                    telegram: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect x="0" y="0" width="48" height="48" fill="none" stroke="none" /><path fill="currentColor" d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"/></svg>'
                },
                "healthicons": {
                    "geo-location": '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085c.1-.074.246-.182.43-.324c.368-.282.89-.697 1.513-1.23a43.403 43.403 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.962 13.962 0 0 0 24 6a13.962 13.962 0 0 0-9.902 4.125A14.117 14.117 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.403 43.403 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a25.536 25.536 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clip-rule="evenodd"/></svg>'
                },
                'uis': {
                    "refresh": '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3m2-8.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8c0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1"/></svg>'
                },
                'flag': {
                    'none': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#ababab" d="M0 0h640v480H0z"/><path fill="#ababab" d="M0 160h640v320H0z"/><path fill="#ababab" d="M0 320h640v160H0z"/></svg>',
                    'ru-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0039a6" d="M0 160h640v320H0z"/><path fill="#d52b1e" d="M0 320h640v160H0z"/></svg>',
                    'by-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#ce1021" d="M0 0h640v480H0z"/><path fill="#009d23" d="M0 340h640v140H0z"/><path fill="#fff" d="M0 110h640v50H0zM0 170h640v50H0zM0 230h640v50H0zM0 290h640v50H0z"/></svg>',
                    'kz-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#00afca" d="M0 0h640v480H0z"/><path fill="#fedf09" d="m160 240l-40-80l40-80h80l40 80l-40 80z"/><circle cx="200" cy="240" r="40" fill="#fedf09"/></svg>',
                    'az-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#3f9c35" d="M.1 0h640v480H.1z"/><path fill="#ed2939" d="M.1 0h640v320H.1z"/><path fill="#00b9e4" d="M.1 0h640v160H.1z"/><circle cx="304" cy="240" r="72" fill="#fff"/><circle cx="320" cy="240" r="60" fill="#ed2939"/><path fill="#fff" d="m384 200l7.7 21.5l20.6-9.8l-9.8 20.7L424 240l-21.5 7.7l9.8 20.6l-20.6-9.8L384 280l-7.7-21.5l-20.6 9.8l9.8-20.6L344 240l21.5-7.7l-9.8-20.6l20.6 9.8z"/></svg>',
                    'am-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#d90012" d="M0 0h640v160H0z"/><path fill="#0033a0" d="M0 160h640v160H0z"/><path fill="#f2a800" d="M0 320h640v160H0z"/></svg>',
                    'kg-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#ff0000" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="120" fill="#ffff00"/><path d="M362 240l-83 60.3l31.6-97.3H294l31.6 97.3z" fill="#ff0000"/></svg>',
                    'md-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#00319c" d="M0 0h640v480H0z"/><path fill="#ffde00" d="M0 0h640v320H0z"/><path fill="#de2110" d="M0 0h640v160H0z"/><path d="M209 287.4l-28-21.2l28-21.2l11 34.4z" fill="#de2110"/><circle cx="209" cy="240" r="25" fill="#de2110"/></svg>',
                    'tj-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#060" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h640v340H0z"/><path fill="#c00" d="M0 0h640v160H0z"/><path fill="#f8c300" d="M320 240l-32-24.4l32-24.4l32 24.4z"/><circle cx="320" cy="240" r="48" fill="#f8c300"/></svg>',
                    'tm-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#00843d" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h640v96H0zm0 192h640v96H0z"/><path fill="#c13929" d="M0 96h640v96H0z"/><circle cx="320" cy="240" r="40" fill="#c13929"/><path fill="#fff" d="m360 240l-40-28l-40 28l15-46l-40-28h50l15-46l15 46h50l-40 28z"/></svg>',
                    'uz-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#0099b5" d="M0 0h640v480H0z"/><path fill="#ce1126" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><circle cx="320" cy="240" r="40" fill="#fff"/><circle cx="340" cy="240" r="30" fill="#0099b5"/></svg>',
                    'ua-4x3': '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><path fill="#005bbb" d="M0 0h640v240H0z"/><path fill="#ffd500" d="M0 240h640v240H0z"/></svg>'
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
    safelist: ['font-semibold'],
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