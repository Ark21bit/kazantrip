<template>
    <div class="relative lg:p-10 lg:bg-[url(/imgs/bgBorder.png)] bg-cover lg:rounded-5">
        <img class="z-1 lg:hidden absolute top-0 left-0 -translate-y-1/2" src="/imgs/review2.svg" alt="">
        <img class="z-1 lg:hidden absolute top-0 right-0 -translate-y-1/2" src="/imgs/review1.svg" alt="">
        <div class="z-1 lg:hidden absolute top-0 left-30 -translate-y-2/3 w-3.5 h-3.5 bg-#F7C03F rounded-full"></div>
        <div class="z-1 lg:hidden absolute top-10 right-5 w-2 h-2 bg-#F7C03F rounded-full"></div>
        <div class="flex flex-col lg:flex-row gap-5 max-lg:border border-#F6F6F6 p-5 lg:p-10 rounded-5 bg-white">
            <div class="flex flex-col gap-4 flex-1">
                <h2 class="text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack font-Montserrat  max-lg:text-center [&>span]:text-primary" v-html="title"></h2>
                <p class="text-second text-sm leading-1.4 max-lg:text-center lg:max-w-85.75 mb-auto">{{ subTitle }}</p>
                <img :src="img" class="max-lg:hidden -translate-x-10 translate-y-10 -mt-13 max-h-95 object-contain object-left" alt="">
            </div>
            <div class="flex-[1.165_1_0%]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    img: String,
    title: String,
    subTitle: String,
})
</script>