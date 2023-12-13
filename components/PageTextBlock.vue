<template>
    <div class="flex flex-col gap-5 lg:gap-7.5 items-start">
        <h1 class="text-6.5 lg:text-9.5 leading-1.2 font-bold font-Montserrat text-fblack max-w-262">{{ title }}</h1>
        <p ref="pMessage" :class="{ 'line-clamp-3': isClamp }" class="text-second text-lg leading-1.4 mt-2.5 lg:mt-0">{{ text }}</p>
        <Button v-if="clampButtonVisible" @click="isClampToglle" variant="link" size="lg" padded>{{ isClamp ? generalConfig?.static_info?.global_words?.more : generalConfig?.static_info?.global_words?.hide_more_details }}</Button>
        <slot name="end" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    text: String
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const pMessage = ref<HTMLElement>()
const { clampButtonVisible, isClamp, isClampToglle } = useClamp(pMessage, { fontSize: 16, lineHeight: 1.4, countLine: 3 })
</script>