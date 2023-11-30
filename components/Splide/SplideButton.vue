<template>
    <button :class="buttonClasses">
        <slot>
            <Icon name="Arrow"></Icon>
        </slot>
    </button>
</template>
<script lang="ts" setup>
export type SplideButtonColors = 'white' | 'azul' | 'transparent' 
const props = defineProps({
    color: { type: String as PropType<SplideButtonColors>, default: 'white' },
})
const colorClasses = {
    white: 'bg-white text-diamondBlack hover:(bg-primary text-white) disabled:(bg-inactive text-diamondBlack)',
    azul: 'bg-#E2F1F2 text-primary hover:(bg-primary text-white) disabled:(bg-inactive text-diamondBlack)',
    transparent: 'text-diamondBlack hover:text-primary disabled:text-inactive'
}

const buttonClasses = computed(() => [
    'splide__arrow flex text-2xl rounded-full p-3.25 transition-colors duration-500 ease-linear pointer-events-auto',
    colorClasses?.[props.color]
])
</script>