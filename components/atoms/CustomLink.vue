<template>
    <NuxtLinkLocale :to="link">
        <slot />
    </NuxtLinkLocale>
</template>

<script lang="ts" setup>
const props = defineProps({
    to: String,
})

const link = computed(() => {
    if (props.to === null || props.to === undefined) return ''
    if (props.to.slice(0, 4) === 'http') return props.to
    return props.to.slice(0, 1) === '/' ? props.to : `/${props.to}`
})
</script>