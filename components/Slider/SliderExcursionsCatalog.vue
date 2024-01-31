<template>
    <div class="flex flex-col gap-5 lg:flex-row relative contain-layout">
        <Swiper :initial-slide="initialSlide" slides-per-view="auto" class="w-full max-lg:([&>.swiper-wrapper]:(flex-wrap gap-3 overflow-hidden h-auto !transform-none))" :class="{ '[&>.swiper-wrapper]:max-lg:max-h-44': isShort, 'pl-8': linksIsCustom }" v-bind="options">
            <SwiperSlide v-for="item in links" class="w-fit">
                <Bage class="[&.router-link-active]:(bg-primary text-white)" :tag="CustomLink" :to="item?.slug" link>{{ item.title }}</Bage>
            </SwiperSlide>
            <Button class="w-fit lg:hidden mt-5" size="lg" @click="toggle" padded variant="link">{{ isShort ? generalConfig?.static_info?.global_words?.more : generalConfig?.static_info?.global_words?.hide }}</Button>
        </Swiper>
        <div class="flex gap-3 justify-between lg:absolute left-1/2 pointer-events-none lg:top-1/2 lg:-translate-1/2 w-full z-1 max-lg:hidden">
            <div class="max-lg:hidden absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)]"></div>
            <div class="max-lg:hidden absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)] rotate-180"></div>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="swiper-button-prev-excursions lg:-translate-x-5/6"></SliderButton>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="swiper-button-next-excursions rotate-180 lg:translate-x-5/6"></SliderButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';
import { CustomLink } from '#components';
import { isEqual } from 'ufo'
const { locale } = useI18n()
const route = useRoute()
const options = {
    modules: [Mousewheel, Navigation],
    mousewheel: {
        forceToAxis: true
    },
    loop: true,
    breakpoints: {
        1024: {
            enabled: true,
            navigation: {
                enabled: true
            },
            spaceBetween: 7
        }
    },
    enabled: false,
    navigation: {
        nextEl: '.swiper-button-next-excursions',
        prevEl: '.swiper-button-prev-excursions',
        enabled: false
    },
}

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const isShort = useState('sliderExcursionsCatalogIsShort', () => true)
const toggle = () => {
    isShort.value = !isShort.value
}

const getUrl = (url: string) => url.substring(0, 1) == '/' ? url : `/${url}`
const localePath = useLocalePath()
const initialSlide = computed(() => generalConfig.value?.structure.findIndex(a => {
    if (route.path == localePath('/excursions/individual')) return -1
    return isEqual(localePath(getUrl(a.slug)), route.path, { trailingSlash: true })
}))

const linksForIndividualPage = {
    "ru": [
        {
            slug: 'individual-avto-3897',
            title: 'Автобусные'
        },
        {
            slug: 'individual-walk-3897',
            title: 'Пешеходные'
        },
        {
            slug: 'individual-obzor-3897',
            title: 'Обзорные'
        },
        {
            slug: 'individual-outdoor-3897',
            title: 'Выездные'
        },
        {
            slug: 'individual-gastro-3897',
            title: 'Гастрономические'
        }
    ],
    "en": [
        {
            slug: 'individual-avto-3897',
            title: 'Автобусные'
        },
        {
            slug: 'individual-walk-3897',
            title: 'Пешеходные'
        },
        {
            slug: 'individual-obzor-3897',
            title: 'Обзорные'
        },
        {
            slug: 'individual-outdoor-3897',
            title: 'Выездные'
        },
        {
            slug: 'individual-gastro-3897',
            title: 'Гастрономические'
        }
    ],
}

const linksIsCustom = computed(() => route.path == localePath('/excursions/individual'))

const links = computed(() => {
    if (linksIsCustom.value) return linksForIndividualPage[locale.value as 'ru' | 'en']
    return generalConfig.value?.structure
})
</script>