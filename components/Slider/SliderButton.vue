<template>
    <button :class="buttonClasses">
        <slot>
            <Icon name="Arrow"></Icon>
        </slot>
    </button>
</template>
<script lang="ts" setup>
export type SliderButtonColors = 'white' | 'azul' | 'transparent'
const props = defineProps({
    color: { type: String as PropType<SliderButtonColors>, default: 'white' },
    padding: { type: String, default: 'p-3.25' },
    size: { type: String, default: 'text-2xl' },
})
const colorClasses = {
    white: 'bg-white text-fblack hover:(bg-primary text-white) disabled:(bg-inactive text-fblack)',
    azul: 'bg-#E2F1F2 text-primary hover:(bg-primary text-white) disabled:(bg-inactive text-fblack)',
    transparent: 'text-fblack hover:text-primary disabled:text-inactive',
}

const buttonClasses = computed(() => [
    'flex rounded-full transition-colors duration-500 ease-linear pointer-events-auto',
    props.padding,
    props.size,
    colorClasses?.[props.color]
])
</script>