<template>
    <h1 class="mt-10 lg:mt-20 text-6.5 lg:text-9.5 font-Montserrat leading-1.2 font-bold text-fblack">{{ type === 'timetable' ? timetableTitle[locale] : pageInfo?.lang_info?.title }}</h1>
    <SliderExcursionsCatalog class="py-5 lg:mt-2.5" />
    <div class="mt-2.5 col-span-full border-t lg:border-y border-#EBEBEB pt-7.5 lg:py-7.5">
        <CatalogContainer :type="type" class="wrapper" :timetable="true">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-7.5 h-fit max-lg:(pb-7.5 border-b border-#EBEBEB)">
                <CardCatalog v-for="card in type === 'timetable' ? pageInfo : pageInfo?.info_products?.data" @order="openOrder(card?.slug)" :key="card?.id" :type_id="card?.type_id" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :duration="card?.duration_event_text"
                    :price="card?.price_see" :description="card?.lang_info?.description" :reviews-count="card.reviews_count" :is-sale="card?.is_sale" :category_id="card?.category_id" :is-radio-gid="card?.is_radio_gid" :price-old="card?.price_see_old" :rating="card?.rating" />
            </div>
        </CatalogContainer>
    </div>
    <div v-if="pageInfo?.info_seo_blocks?.data?.length ?? 0 > 0" class="mt-20 lg:mt-25 pb-7.5 border-b border-#EBEBEB col-span-full">
        <SeoBlock :data="pageInfo?.info_seo_blocks?.data" class="wrapper" />
    </div>
    <Modal @close="closeModal" :is-show="isModalShow" :class="{ 'min-h-225': pending }">
        <div v-if="pending" class="m-auto flex justify-center items-center">
            <Icon name="eos-icons:loading" class="text-7xl text-primary"></Icon>
        </div>
        <component v-else :is="order" :product="product"></component>
    </Modal>
</template>

<script setup lang="ts">
import type { PageType } from '~/types/fetch/shared';

const props = defineProps({
    pageInfo: Object,
    type: String as PropType<PageType>
})
const { locale } = useI18n()

const selectOrder = ref<string | null>(null)
const { data: product, pending, execute } = useBaseFetch('search/slugs', {
    immediate: false,
    query: { slug: selectOrder },
    transform: (product: any) => product.data,
    watch: false
})

const order = computedWithControl(() => product.value?.type_id, () => {
    if (product.value?.type_id == 11) return resolveComponent('OrderRegular')
    if (product.value?.type_id == 12) return resolveComponent('OrderIndividual')
    if (product.value?.type_id == 41) return resolveComponent('OrderCertificate')
    return null
})

const { closeModal, isModalShow, openModal } = useModal()
const openOrder = async (value: string) => {
    openModal()
    selectOrder.value = value
    execute()
}

const timetableTitle: any = {
    en: 'Group tours of Kazan and Tatarstan',
    ru: 'Групповые экскурсии по Казани и Татарстану'
}
</script>