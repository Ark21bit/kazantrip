<template>
    <component :is="tag" :class="buttonClass">
        <slot name="prefix">
            <Icon v-if="prefixIcon" :name="prefixIcon" :class="iconClass"></Icon>
        </slot>
        <slot />
        <slot name="suffix">
            <Icon v-if="suffixIconName" :name="suffixIconName" :class="iconClass"></Icon>
        </slot>
    </component>
</template>

<script lang="ts" setup>
type ButtonColor = 'green' | 'yellow'
type ButtonSize = 'md' | 'sm' | 'lg'
type ButtonVariant = 'outline' | 'solid' | 'link'
const props = defineProps({
    tag: { type: [Object, String], default: 'button' },
    color: { type: String as PropType<ButtonColor>, default: 'green' },
    size: { type: String as PropType<ButtonSize>, default: 'md' },
    variant: { type: String as PropType<ButtonVariant>, default: 'solid' },
    square: { type: Boolean, default: false },
    class: { type: [String, Object, Array], default: undefined },
    prefixIcon: String,
    suffixIcon: String,
    loading: Boolean,
    loadingIcon: { type: String, default: 'line-md:loading-twotone-loop' },
    padded: { type: Boolean, default: false },
})

const slots = defineSlots<{
    default: any,
    prefix?: any,
    suffix?: any,
    loading?: any,
}>()

const suffixIconName = computed(() => {
    if (props.loading) return props.loadingIcon
    return props.suffixIcon
})

const ui = {
    color: {
        green: {
            solid: 'bg-primary text-white hover:bg-#21747C disabled:bg-inactive',
            outline: 'bg-transparent ring-1 ring-inactive ring-inset text-fblack hover:(text-primary ring-primary) disabled:(text-inactive ring-bg-inactive)',
            link: 'text-#39919A underline hover:text-#21747C'
        },
        yellow: {
            solid: 'bg-#F7C03F text-white hover:bg-#d7C63F disabled:bg-inactive',
            outline: '',
            link: ''
        }
    },
    size: {
        lg: 'text-base leading-1.2',
        md: 'text-sm lg:text-3.75 leading-1.25 lg:leading-1.25',
        sm: 'text-sm leading-1.25'
    },
    gap: {
        lg: '',
        md: 'gap-2.5',
        sm: 'gap-2.5'
    },
    padding: {
        lg: '',
        md: 'px-10 py-3.25 lg:py-3.75',
        sm: 'px-5.25 py-3.25'
    },
    base: 'flex flex-shrink-0 items-center transition-button duration-500 ease-linear',
    icon: {
        base: "flex-shrink-0",
        size: {
            lg: '',
            md: "text-base",
            sm: "text-xl"
        }
    },
    rounded: 'rounded-lg',
    font: "font-medium"
}

const iconClass = computed(() => {
    return [ui.icon.base, ui.icon.size[props.size]]
})

const buttonClass = computed(() => {
    const variant = ui.color?.[props.color]?.[props.variant]
    return [
        `${ui.base} ${!slots?.suffix && !slots?.prefix ? 'justify-center' : 'justify-between'}`,
        ui.font,
        ui.rounded,
        ui.size[props.size],
        ui.gap[props.size],
        !props.padded && ui.padding[props.size],
        variant,
        props.class
    ]
})
</script>
