<template>
    <SliderOne :imgs="pageInfo?.media_gallery?.data" class="col-span-full h-100 lg:h-150"></SliderOne>
    <Breadcrumbs :links="pageInfo?.info_breadcrumbs?.data" class="max-lg:hidden mt-7.5"></Breadcrumbs>
    <!-- <div class="mt-7.5 flex gap-1.5 flex-wrap">
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Горячий чай</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Вода</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Дождевик</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Грелка</span>
        </div>
    </div> -->
    <div class="col-span-full mt-7.5 lg:mt-10 pb-7.5 border-b border-#EBEBEB">
        <div class="wrapper flex flex-col gap-5 lg:gap-7.5 items-start">
            <h1 class="text-6.5 lg:text-9.5 leading-1.2 font-bold font-Montserrat text-fblack max-w-262">{{ pageInfo?.lang_info?.title }}</h1>
            <p class="text-second text-base leading-1.4 mt-2.5 lg:mt-0">{{ pageInfo?.lang_info?.text }}</p>
            <Button to="/test" variant="link" size="lg" padded :tag="CustomLink">Показать больше</Button>
        </div>
    </div>
    <div class="mt-7.5 lg:mt-15 flex gap-5 flex-wrap">
        <Button v-if="pageInfo?.url_panorama" target="_blank" :tag="CustomLink" :to="pageInfo?.url_panorama" class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Panorama" class="text-2xl"></Icon>
            </template>
            Круговая фотопанорама
        </Button>
        <Button class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Video" class="text-2xl"></Icon>
            </template>
            Видеообзоры наших туристов
        </Button>
        <Button class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Audio" class="text-2xl"></Icon>
            </template>
            Краткая аудиоэкскурсия
        </Button>
    </div>
    <div class="mt-7.5 grid lg:grid-cols-[1fr_1.03fr_1fr] rounded-5 ring-(inset 1 #F6F6F6) shadow-base">
        <div class="p-5 lg:p-6 border-b lg:border-r border-#EBEBEB flex flex-col justify-center gap-1.5">
            <p class="text-sm leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.nearest_date }}</p>
            <p class="text-2xl font-semibold leading-1.2 text-primary">{{ nearestDate }}</p>
        </div>
        <div class="p-5 lg:p-6 border-b lg:border-r border-#EBEBEB flex flex-col justify-center gap-1.5">
            <p class="text-sm leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.price_list }}</p>
            <p class="text-2xl font-semibold leading-1.2 text-primary">{{ pageInfo?.price_see }}₽<span class="ml-1.5 leading-1.2 text-#A4A4A4 text-sm line-through decoration-fblack">{{ pageInfo?.price_see_old }}₽</span></p>
        </div>
        <div class="p-5 py-6 lg:p-6 flex flex-col justify-center gap-1.5">
            <OrderRegular :product="pageInfo" #="{ openModal }">
                <Button @click="openModal" class="w-full">{{ generalConfig?.static_info?.global_words?.order }}</Button>
            </OrderRegular>
        </div>
    </div>
    <div class="mt-15 lg:mt-22">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Общее описание</h2>
            <div class="flex gap-1.5 items-center flex-wrap">
                <p class="mr-1">Партнер:</p>
                <CustomLink v-for="item in pageInfo?.info_partners_blocks?.data" target="_blank" :to="item?.lang_info?.url" class="flex ring-(1 inset primary) text-primary py-2 px-4 rounded-full text-sm leading-1.2">{{ item?.lang_info?.title }}</CustomLink>
            </div>
        </div>
        <div class="mt-5 lg:mt-7.5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Calendar" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.nearest_date }}</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ nearestDate }}</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Time" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.duration }}</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ pageInfo?.duration_event_text }}</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Trail" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.type_excursion }}</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ getTitleCategoriesProduct(pageInfo?.category_id) }}</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Radiogid" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Радиогид</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl"> {{ pageInfo?.is_radio_gid ? 'Да (бесплатно)' : 'Нет' }}</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 bg-white shadow-base col-span-full lg:col-span-3">
                <div class="p-4 pb-3 lg:p-5 flex gap-2.5 lg:gap-3.75 items-center">
                    <Icon name="Map" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                    <p class="text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.departure }}</p>
                </div>
                <div class="flex flex-col lg:flex-row lg:border-t border-#EBEBEB">
                    <div v-for="item in pageInfo?.start_place_types" class="flex-1 py-3 lg:py-5 p-5 border-t lg:border-r lg:last:border-r-none border-#EBEBEB">
                        <p class=" text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Отель Татарстан</p>
                        <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ getTitlePlacesStart(item) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-10 lg:mt-25 bg-[url(/imgs/trailMBg.svg)] lg:bg-[url(/imgs/trailBg.svg)] col-span-full bg-no-repeat pt-23.5 lg:pt-26 pb-20 lg:pb-33.75 bg-[length:100%_100%]">
        <div class="wrapper">
            <h2 class="max-lg:hidden text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Маршрут</h2>
            <SliderTrail :trails="pageInfo?.info_route_blocks?.data" class="mt-5 lg:mt-16" />
        </div>
    </div>
    <div class="mt-10 lg:mt-17.5">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.all_price }}</h2>
        <div class="grid relative grid-cols-[repeat(auto-fit,minmax(122px,1fr))] mt-5 lg:mt-7.5 p-3.75 py-5 lg:px-5 lg:py-6 gap-y-5 gap-4 lg:gap-5 bg-#E2F1F2 rounded-5">
            <div v-for="ticket in pageInfo?.info_prices?.data" class="flex flex-col gap-1.5 lg:gap-2 p-4 lg:p-5 rounded-5 ring-(1 inset #F6F6F6) font-semibold bg-white">
                <p class="text-fblack text-sm lg:text-base leading-1.4 lg:leading-1.4">{{ getTitleTypeTicket(ticket?.type_ticket_id) }}</p>
                <p class="text-primary text-2xl lg:text-8 leading-1.25 lg:leading-1.25 flex flex-col items-end lg:flex-row gap-x-1.5">{{ ticket?.price }}₽<span class="line-through lg:mb-2.5 text-#A4A4A4 leading-1.2 decoration-fblack text-sm">1350₽</span></p>
            </div>
            <div class="absolute max-lg:-translate-1/2 top-0 lg:-top-4 lg:-translate-y-full left-16% rounded-full w-2 aspect-square bg-#F7C03F"></div>
            <div class="absolute top-12.75 lg:top-0 left-0 lg:left-full -translate-1/2 rounded-full aspect-square w-3.75 lg:w-9.75 bg-primary"></div>
            <div class="absolute bottom-0 lg:-bottom-6.75 translate-y-1/2 lg:translate-y-full left-60% lg:left-2.5 rounded-full w-3.5 lg:w-5.75 aspect-square bg-primary"></div>
            <div class="max-lg:hidden absolute -bottom-5 translate-y-full right-22% rounded-full w-3.5 aspect-square bg-#F7C03F"></div>
        </div>
    </div>
    <div class="mt-15 lg:mt-25">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.included_in_the_price }}</h2>
        <ul class="mt-5 lg:mt-7.5 grid lg:grid-cols-4 gap-4 lg:gap-5 text-base lg:text-lg leading-1.2 lg:leading-1.2 font-medium text-#333 ">
            <li v-for="item in pageInfo?.lang_info?.half_text" class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">{{ item }}</li>
        </ul>
    </div>
    <SliderPurple class="mt-15 lg:mt-25"></SliderPurple>
    <div class="mt-15 lg:mt-25 col-span-full pb-7.5 border-b border-#EBEBEB">
        <SeoBlock v-for="item in pageInfo?.info_seo_blocks?.data" :title="item?.lang_info?.title" :text="item?.lang_info?.text" class="wrapper"></SeoBlock>
    </div>
    <Reviews :reviews="pageInfo?.info_reviews?.data" :product-id="pageInfo?.id" :title="pageInfo?.lang_info?.title" class="mt-15 lg:mt-25"></Reviews>
    <div v-if="pageInfo?.info_recommendations?.data?.length ?? 0 > 0" class="mt-15 lg:mt-25">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Похожие экскурсии</h2>
        <SliderRecomendations :data="pageInfo?.info_recommendations?.data" class="mt-5 lg:mt-10" />
    </div>
</template>

<script setup lang="ts">
import CustomLink from '~/components/atoms/CustomLink.vue';
import type { RegularEData } from '~/types/fetch/pathMatch/regularE';
const props = defineProps({
    pageInfo: Object as PropType<RegularEData>
})

const { locale } = useI18n()
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const dayjs = useDayjs()
const nearestDate = computed(() => {
    if (props.pageInfo?.info_timetables?.data?.length ?? 0 > 0) return dayjs(props.pageInfo?.info_timetables?.data?.[0]?.start_event_at ?? null).tz('Europe/Moscow').locale(locale.value).format('D MMMM')
    return '-'
})
</script>