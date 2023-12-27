<template>
    <div class="flex flex-col gap-5 gap-7.5">
        <div v-for="item in isShort ? dataShorts : data" class="flex flex-col gap-5 lg:gap-7.5 text-fblack">
            <div class="[&_h2]:(text-5.5 lg:text-2xl) [&_h3]:(text-lg lg:text-xl) [&_h4]:(text-base lg:text-lg) font-semibold font-Montserrat leading-1.2 lg:leading-1.2" v-html="item?.lang_info?.title"></div>
            <div class="text-sm lg:text-base leading-1.4 lg:leading-1.4 [&_a]:(hover:text-primary underline transition-colors)" v-interpolate v-html="item?.lang_info?.text"></div>
        </div>
        <Button v-if="Number(data?.length) > 1" class="w-fit" size="lg" @click="toggle" padded variant="link">{{ isShort ? generalConfig?.static_info?.global_words?.more : generalConfig?.static_info?.global_words?.hide_more_details }}</Button>
    </div>
</template>

<script setup lang="ts">
import type { InfoSEOBlocksDatum } from '~/types/fetch/shared';
import { vInterpolate } from '~/directives/v-interpolate'
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const props = defineProps({
    title: String,
    description: String,
    data: Array as PropType<InfoSEOBlocksDatum[]>
})

const dataShorts = computed(() => props?.data?.slice(0, 1))

const isShort = ref(true)

const toggle = () => {
    isShort.value = !isShort.value
}
</script>