<template>
    <div v-bind="$attrs" class="flex flex-col gap-7.5 lg:gap-10">
        <h2 class="font-Montserrat text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack">{{ title }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-y-7.5">
            <CardCatalog v-for="card in products" @order="openOrder(card?.slug)" :type_id="card?.type_id" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :duration="card?.duration_event_text" :price="card?.price_see" :description="card?.lang_info?.description"
                :reviews-count="card.reviews_count" :is-sale="card?.is_sale" :category_id="card?.category_id" :is-radio-gid="card?.is_radio_gid" :price-old="card?.price_see_old" :rating="card?.rating"></CardCatalog>
            <Button :tag="CustomLink" to="/ekskursii" class="col-span-full lg:mx-auto mt-2.5 lg:mt-0">{{ generalConfig?.static_info?.global_words?.more_excursion }}</Button>
        </div>
    </div>
    <Modal @close="closeModal" :is-show="isModalShow" :class="{ 'min-h-225': pending }">
        <div v-if="pending" class="m-auto flex justify-center items-center">
            <Icon name="eos-icons:loading" class="text-7xl text-primary"></Icon>
        </div>
        <component v-else :is="order" :product="product"></component>
    </Modal>
</template>

<script setup lang="ts">
import { CustomLink } from '#components';
import type { MainProductsDatum } from '~/types/fetch';
const { generalConfig } = storeToRefs(useGeneralConfigStore())
defineOptions({
    inheritAttrs: false
})
defineProps({
    title: String,
    products: Array as PropType<MainProductsDatum[]>
})

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
</script>