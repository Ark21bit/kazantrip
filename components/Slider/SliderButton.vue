<template>
    <button :class="buttonClasses">
        <slot>
            <span class="i-custom:arrow"></span>
        </slot>
    </button>
</template>
<script lang="ts" setup>
export type SliderButtonColors = 'white' | 'azul' | 'transparent' | 'transparent-light'
const props = defineProps({
    color: { type: String as PropType<SliderButtonColors>, default: 'white' },
    padding: { type: String, default: 'p-3.25' },
    size: { type: String, default: 'text-2xl' },
})
const colorClasses = {
    white: 'bg-white text-fblack hover:(bg-primary text-white) disabled:(bg-inactive text-fblack)',
    azul: 'bg-#E2F1F2 text-primary hover:(bg-primary text-white) disabled:(bg-inactive text-fblack)',
    transparent: 'text-fblack hover:text-primary disabled:text-inactive',
    "transparent-light": 'text-white hover:text-primary disabled:text-inactive',
}

const buttonClasses = computed(() => [
    'swiper-button',
    props.padding,
    props.size,
    colorClasses?.[props.color]
])
</script>