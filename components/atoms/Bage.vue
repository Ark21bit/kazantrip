<template>
    <component :is="tag" :class="bageClass">
        <slot />
    </component>
</template>

<script lang="ts" setup>
type BageColor = 'green'
type BageSize = 'md'
type BageVariant = 'solid'
const props = defineProps({
    tag: { type: [String, Object], default: 'div' },
    color: { type: String as PropType<BageColor>, default: 'green' },
    size: { type: String as PropType<BageSize>, default: 'md' },
    variant: { type: String as PropType<BageVariant>, default: 'solid' },
    class: { type: [String, Object, Array] },
    link: { type: Boolean, default: false }
})
const ui = {
    color: {
        green: {
            solid: {
                base: 'bg-#E2F1F2 text-fblack',
                link: 'hover:(bg-primary text-white)'
            },
        }
    },
    size: {
        md: 'text-sm',
    },
    padding: {
        md: 'px-4 py-2.25',
    },
    base: 'flex shrink-0 transition-bage duration-500 ease-linear',
    rounded: 'rounded-lg',
    font: " font-medium leading-1.2"
}


const bageClass = computed(() => {
    return [
        ui.font,
        ui.rounded,
        ui.size[props.size],
        ui.padding[props.size],
        props.class,
        ui.base,
        ui.color?.[props.color]?.[props.variant].base,
        props.link && ui.color?.[props.color]?.[props.variant].link
    ]
})
</script>