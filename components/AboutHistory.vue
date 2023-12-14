<template>
    <div class="border-b border-#EBEBEB mt-7.5 lg:mt-10 col-span-full">
        <div v-for="item in data" class="border-t border-#EBEBEB">
            <div class="wrapper flex flex-col lg:flex-row gap-4 lg:gap-10 py-6 lg:py-7.5">
                <p class="w-4ch text-#39919A text-xl lg:text-2xl font-Montserrat font-bold leading-1.2 lg:leading-1.2 mr-auto">{{ item?.year }}</p>
                <div class="h-80.5 lg:max-w-125 flex-1 [&>img]:(w-full h-full object-cover object-center rounded-2xl)">
                    <img :src="item?.image" alt="">
                </div>
                <div class="flex flex-col gap-4 lg:gap-5 lg:max-w-130.5 flex-[1.25] mt-1 lg:mt-0">
                    <h2 class="text-fblack text-xl lg:text-2xl font-Montserrat font-bold leading-1.2 lg:leading-1.2">{{ item?.title }}</h2>
                    <p class="text-second text-sm lg:text-base leading-1.4 lg:leading-1.4">{{ item?.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { HistoryYear } from '~/types/fetch/about';

defineProps({
    data: Object as PropType<HistoryYear>
})
</script>