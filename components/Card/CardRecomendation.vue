<template>
    <component :is="tag" class="flex flex-col rounded-5 overflow-hidden shadow-base relative">
        <div class="relative h-62.5">
            <div class="h-full [&>img]:(w-full h-full object-cover object-center)" v-html="img ?? getDefaultImg()"></div>
            <div class="flex gap-2 flex-wrap absolute top-5 lg:top-4 inset-x-5 lg:inset-x-4">
                <div v-if="isSale" class="bg-#DC3333 px-3 lg:px-4 py-1.5 lg:py-2.25 rounded-full font-medium leading-1.2 lg:leading-1.2 text-sm lg:text-base text-white">{{ generalConfig?.static_info?.global_words?.sale_text }}</div>
                <div v-for="item in nameplates" class="bg-#DC3333 px-3 lg:px-4 py-1.5 lg:py-2.25 rounded-full font-medium leading-1.2 lg:leading-1.2 text-sm lg:text-base text-white">{{ item }}</div>
            </div>
        </div>
        <div class="grow rounded-t-5 -mt-5 lg:-mt-9 p-5 flex flex-col gap-5 bg-white relative ring ring-inset ring-#F6F6F6">
            <p class="text-base lg:text-lg text-fblack font-semibold leading-1.2 lg:leading-1.2 grow line-clamp-3">{{ title }}</p>
            <p class="text-2xl font-semibold leading-1.25 text-primary">
                {{ price }}₽
                <span v-if="priceOld" class="ml-1.5 text-sm text-#A4A4A4 line-through decoration-fblack">{{ priceOld }}₽</span>
            </p>
        </div>
        <CustomLink :to="slug" class="absolute inset-0"></CustomLink>
    </component>
</template>

<script setup lang="ts">
defineProps({
    tag: { type: [String, Object], default: 'div' },
    img: String,
    price: Number,
    title: String,
    slug: String,
    isSale: Boolean,
    priceOld: Number,
    nameplates: Array,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>