<template>
    <img :src="src" :class="avatarClass">
</template>

<script lang="ts" setup>
type avatarSize = 'md' | 'sm'
const props = defineProps({
    size: { type: String as PropType<avatarSize>, default: 'md' },
    src: { type: String, default: '/imgs/avatarDefault.svg' }
})

const ui = {
    size: {
        md: 'h-17.5 w-17.5',
        sm: 'h-15.5 w-15.5'
    },
    base: 'object-cover object-center',
    rounded: 'rounded-full',
}


const avatarClass = computed(() => [
    ui.rounded,
    ui.base,
    ui.size[props.size],
])
</script>
