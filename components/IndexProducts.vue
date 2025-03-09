<template>
    <div v-bind="$attrs" class="flex flex-col gap-7.5 lg:gap-10">
        <h2 class="font-Montserrat text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack">{{ title }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-y-7.5">
            <ModalRequestIndividual #default="{ openModal }">
                <CardCatalog v-for="card in products" @order="card?.type_id === 12 ? openModal(card?.lang_info?.title) : openOrder(card?.slug)" :type_id="card?.type_id" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :duration="card?.duration_event_text"
                    :price="card?.price_see" :nameplates="[card?.lang_info?.visible_text]?.filter(a => a !== undefined)" :description="card?.lang_info?.description" :reviews-count="card.reviews_count" :is-sale="card?.is_sale" :category_id="card?.category_id" :is-radio-gid="card?.is_radio_gid"
                    :price-old="card?.price_see_old" :rating="card?.rating" :nearest_timetables_info="card.nearest_timetables_info"></CardCatalog>
                <div class="flex gap-5 max-lg:flex-col justify-between col-span-full mt-2.5 lg:mt-0">
                    <Button :tag="CustomLink" :to="link?.slug">{{ link?.title }}</Button>
                    <Button :tag="CustomLink" to="/excursions" color="green-faded" variant="outline">{{ generalConfig?.static_info?.global_words?.more_excursion }}</Button>
                </div>
            </ModalRequestIndividual>
        </div>
    </div>
    <Modal @close="closeModal" :is-show="isModalShow" :class="{ 'min-h-225': pending }">
        <div v-if="pending" class="m-auto flex justify-center items-center">
            <span class="text-7xl text-primary i-eos-icons:loading"></span>
        </div>
        <component v-else :is="order" @close="closeModal" :product="product"></component>
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
    products: Array as PropType<MainProductsDatum[]>,
    link: Object as PropType<{
        title: String,
        slug: String
    }>
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