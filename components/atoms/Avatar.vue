<template>
    <slot :classes="avatarClass">
        <div v-bind="$attrs" :class="avatarClass">
            <img :src="src">
        </div>
    </slot>
</template>

<script lang="ts" setup>
defineOptions({
    inheritAttrs: false,
})
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
    base: '[&>img]:(w-full h-full object-cover object-center) overflow-hidden shrink-0',
    rounded: 'rounded-full',
}


const avatarClass = computed(() => [
    ui.rounded,
    ui.base,
    ui.size[props.size],
])
</script>
