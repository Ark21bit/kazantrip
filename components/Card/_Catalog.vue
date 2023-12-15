<template>
    <div class="flex flex-col rounded-5 overflow-hidden shadow-base">
        <div class="relative h-50 lg:h-62.5">
            <CustomLink :to="slug" class="h-full w-full block [&>img]:(w-full h-full object-cover object-center)" v-html="img"></CustomLink>
            <div v-if="isSale" class="bg-#DC3333 px-3 lg:px-4 py-1.5 lg:py-2.25 rounded-full font-medium leading-1.2 lg:leading-1.2 text-sm lg:text-base text-white absolute top-5 lg:top-4 left-5 lg:left-4">{{ generalConfig?.static_info?.global_words?.sale_text }}</div>
        </div>
        <div class="grow rounded-t-5 -mt-5 lg:-mt-9 p-5 flex flex-col gap-5 bg-white relative ring ring-inset ring-#F6F6F6">
            <div class="flex flex-col gap-4 grow">
                <div class="flex justify-between gap-3 text-sm lg:text-base leading-1.4 lg:leading-1.4 text-fblack">
                    <div class="flex gap-1.5 items-end">
                        <Icon name="Star" class="text-#F7C03F text-xl lg:text-2xl"></Icon>
                        <span class="font-medium">{{ rating }}</span>
                    </div>
                    <p> {{ generalConfig?.static_info?.global_words?.count_reviews?.replace('%s', String(reviewsCount)) }}</p>
                </div>
                <CustomLink :to="slug" class="text-base lg:text-lg text-fblack font-semibold leading-1.2 lg:leading-1.2 grow line-clamp-3">{{ title }}</CustomLink>
                <p class="max-lg:hidden text-sm text-second leading-1.4 h-5.6em line-clamp-4">{{ description }}</p>
                <CustomLink :to="slug" class="text-#39919A underline leading-1.2 text-sm hover:text-#21747C">{{ generalConfig?.static_info?.global_words?.more }}</CustomLink>
            </div>
            <div class="hidden lg:flex flex-col gap-3 text-#333333">
                <div class="flex gap-1.75 items-center">
                    <Icon name="Time" class="text-2xl"></Icon>
                    <p class="text-sm font-medium leading-1.4">{{ duration }}</p>
                </div>
                <div class="flex gap-1.75 items-center">
                    <Icon :name="isRadioGid ? 'Radiogid' : 'Megaphone'" class="text-2xl"></Icon>
                    <p class="text-sm font-medium leading-1.4">{{ isRadioGid ? generalConfig?.static_info?.global_words?.yes_free : generalConfig?.static_info?.global_words?.guide_loudspeaker }}</p>
                </div>
                <div class="flex gap-1.75 items-center">
                    <Icon name="Trail" class="text-2xl"></Icon>
                    <p class="text-sm font-medium leading-1.4">{{ getTitleCategoriesProduct(category_id) }}</p>
                </div>
            </div>
            <Button @click="emit('order')" class="!px-4 !py-3 max-lg:text-sm max-lg:leading-1.25">
                {{ generalConfig?.static_info?.global_words?.order }}
                <template #suffix>
                    <span class="text-lg lg:text-xl font-semibold leading-1.25 lg:leading-1.25">
                        {{ price }}₽
                        <span v-if="priceOld" class="ml-1.5 text-sm text-#88BDC2 line-through decoration-white">{{ priceOld }}₽</span>
                    </span>
                </template>
            </Button>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    type_id: Number,
    title: String,
    description: String,
    slug: String,
    rating: Number,
    isSale: Boolean,
    img: String,
    duration: String,
    price: Number,
    priceOld: Number,
    reviewsCount: Number,
    isRadioGid: Boolean,
    category_id: Number,
})
const emit = defineEmits(['order'])

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>