<template>
    <footer>
        <div class="h-14 lg:h-30">
            <picture>
                <source media="(max-width: 1024px)" srcset="/imgs/footerBgMobile.svg">
                <img class="w-full h-full object-top object-cover" src="/imgs/footerBg.svg" alt="">
            </picture>
        </div>
        <div class="grid-container bg-#031F27">
            <div>
                <div class="flex justify-between gap-2 items-center py-4 lg:py-6">
                    <span class="w-16.75 h-13 lg:(w-19 h-15) text-white i-custom:logo-white?bg"></span>
                    <FooterNav class="max-lg:hidden" />
                    <Socials class="flex gap-2 text-3xl text-white lg:hidden" />
                </div>
                <div class="flex flex-col lg:flex-row border-t lg:border-y border-#303030 py-5 lg:py-7.5 gap-5 lg:gap-7.5">
                    <div class="w-full lg:w-103.25">
                        <div class="w-full h-50 lg:h-71.5 rounded-5 overflow-hidden">
                            <yandex-map :settings="{
                                location: { center: [49.122386, 55.786445], zoom: 15 }
                            }">
                                <YandexMapDefaultSchemeLayer :settings="{ theme: 'dark' }" />
                                <YandexMapDefaultFeaturesLayer />
                                <yandex-map-default-marker :settings="{ coordinates: [49.122386, 55.786445] }" />
                                <yandex-map-default-marker :settings="{ coordinates: [49.103726, 55.788344] }" />
                                <yandex-map-default-marker :settings="{ coordinates: [49.130027, 55.815289] }" />
                            </yandex-map>
                        </div>
                        <CustomLink class="text-base font-semibold leading-1.2 text-white hover:text-primary transition-colors duration-500 ease-linear block mt-3" target="_blank" :to="generalConfig?.static_info?.agent_info?.url">{{ generalConfig?.static_info?.agent_info?.title }}</CustomLink>
                    </div>
                    <div class="flex flex-col gap-5 grow">
                        <div class="flex flex-col lg:flex-row gap-5 w-full">
                            <div class="text-white grow max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.addresses }}</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">{{ generalConfig?.static_info?.global_words?.departure_excursions }}</p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li v-for="item in generalConfig?.static_info?.contact?.departure_points" class="flex gap-3 hover:text-primary transition-colors duration-500 ease-linear before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">
                                        <CustomLink :to="item?.url" target="_blank">{{ item?.title }}</CustomLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-white grow max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.contact }}</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">{{ generalConfig?.static_info?.global_words?.single_line }}
                                    <NuxtLink :to="phoneLinkReplace(firstPhone)" class="text-white hover:text-primary transition-colors duration-500 ease-linear">{{ firstPhone }}</NuxtLink>
                                </p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li v-for="item in generalConfig?.static_info?.contact?.office_info" class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">
                                        <span>
                                            {{ `${item?.address}` }}
                                            <NuxtLink :to="phoneLinkReplace(item?.telephone)" class="hover:text-primary transition-colors duration-500 ease-linear">{{ `\n${item?.telephone}` }}</NuxtLink>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-white max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.time_work }}</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">{{ generalConfig?.static_info?.global_words?.no_breaks_off }}</p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li v-for="item in generalConfig?.static_info?.contact?.opening_hours" class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">{{ item }}</li>
                                </ul>
                            </div>
                            <div class="flex lg:hidden pb-5 border-b border-#303030">
                                <CustomLink class="text-base font-semibold leading-1.2 text-white" :to="generalConfig?.static_info?.menu?.footer?.blog?.slug">{{ generalConfig?.static_info?.menu?.footer?.blog?.title }}</CustomLink>
                            </div>
                        </div>
                        <div class="flex justify-between gap-2 mt-auto">
                            <Socials class="flex gap-2 text-3xl text-white max-lg:hidden" />
                            <div class="flex items-center gap-5 text-2xl text-white">
                                <img src="/icons/visa.svg" alt="">
                                <img src="/icons/mastercard.svg" alt="">
                                <img src="/icons/mir.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-sm leading-1.2 text-#7B7B7B flex flex-col lg:flex-row gap-5 lg:gap-6 py-5 lg:py-6">
                    <p class="mr-auto">{{ generalConfig?.static_info?.global_words?.copyright }}</p>
                    <CustomLink v-for="item in generalConfig?.static_info?.bottom_footer" :to="item?.slug" class="hover:text-white transition-colors">{{ item?.title }}</CustomLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapDefaultMarker } from 'vue-yandex-maps';
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const [firstPhone] = generalConfig.value?.static_info?.contact?.telephones ?? []
</script>