<template>
    <SliderOne :imgs="pageInfo?.media_gallery?.data" class="col-span-full h-100 lg:h-150"></SliderOne>
    <Breadcrumbs :links="pageInfo?.info_breadcrumbs?.data" class="max-lg:hidden mt-7.5"></Breadcrumbs>
    <div class="col-span-full mt-7.5 lg:mt-10 pb-7.5 border-b border-#EBEBEB">
        <PageTextBlock class="wrapper" :title="pageInfo?.lang_info?.title" :text="pageInfo?.lang_info?.text">
            <template #end>
                <Button @click="openModal" class="max-lg:w-full">{{ generalConfig?.static_info?.global_words?.order }}</Button>
            </template>
        </PageTextBlock>
    </div>
    <Table class="lg:grid-cols-2 mt-8">
        <template #head>
            <TableTr>
                <TableTh>{{ generalConfig?.static_info?.global_words?.members_in_the_group }}</TableTh>
                <TableTh>{{ generalConfig?.static_info?.global_words?.cost_per_group }}</TableTh>
            </TableTr>
        </template>
        <TableTr v-for="infoPrice in pageInfo?.info_prices.data">
            <TableTd before :data-label="generalConfig?.static_info?.global_words?.members_in_the_group">{{ getTitleInfoPrices(infoPrice?.type_price_id) }}</TableTd>
            <TableTd before :data-label="generalConfig?.static_info?.global_words?.cost_per_group">{{ infoPrice?.price }} ₽</TableTd>
        </TableTr>
    </Table>
    <div>
        <p class="text-second text-base leading-1.4 mt-5">{{ pageInfo?.lang_info?.mini_description }}</p>
        <ul class="list-inside list-disc">
            <li class="marker-text-primary" v-for="item in pageInfo?.lang_info?.part_info">{{ item }}</li>
        </ul>
    </div>
    <div v-if="pageInfo?.info_seo_blocks?.data?.length ?? 0 > 0" class="mt-15 lg:mt-25 col-span-full pb-7.5 border-b border-#EBEBEB">
        <SeoBlock :data="pageInfo?.info_seo_blocks?.data" class="wrapper"></SeoBlock>
    </div>
    <Reviews :reviews="pageInfo?.info_reviews?.data" :product-id="pageInfo?.id" :product-title="pageInfo?.lang_info?.title" class="mt-15 lg:mt-25"></Reviews>
    <div v-if="pageInfo?.info_recommendations?.data?.length ?? 0 > 0" class="mt-15 lg:mt-25">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.similar_excursions }}</h2>
        <SliderRecomendations :data="pageInfo?.info_recommendations?.data" class="mt-5 lg:mt-10" />
    </div>
    <Modal @close="closeModal" :is-show="isModalShow">
        <OrderIndividual @close="closeModal" :product="pageInfo"></OrderIndividual>
    </Modal>
</template>

<script setup lang="ts">
import type { IndividualEData } from '~/types/fetch/pathMatch/individualE';
import type { PageType } from '~/types/fetch/shared';

const props = defineProps({
    pageInfo: Object as PropType<IndividualEData>,
    type: String as PropType<PageType>
})
const { closeModal, isModalShow, openModal } = useModal()
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>