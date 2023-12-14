<template>
    <div class="flex flex-col gap-5 gap-7.5">
        <div v-for="item in isShort ? dataShorts : data" class="flex flex-col gap-5 lg:gap-7.5">
            <h3 class="text-5.5 lg:text-2xl font-semibold font-Montserrat leading-1.2 lg:leading-1.2 text-fblack">{{ item?.lang_info?.title }}</h3>
            <p class="text-sm lg:text-base leading-1.4 lg:leading-1.4 text-fblack">{{ item?.lang_info?.text }}</p>
        </div>
        <Button v-if="Number(data?.length) > 1" class="w-fit" size="lg" @click="toggle" padded variant="link">{{ isShort ? generalConfig?.static_info?.global_words?.more : generalConfig?.static_info?.global_words?.hide_more_details }}</Button>
    </div>
</template>

<script setup lang="ts">
import type { InfoSEOBlocksDatum } from '~/types/fetch/shared';
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