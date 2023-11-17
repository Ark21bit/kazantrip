<template>
    <button :class="buttonClasses">
        <slot>
            <Icon name="Arrow"></Icon>
        </slot>
    </button>
</template>
<script lang="ts" setup>
const props = defineProps({
    color: { type: String as PropType<'white' | 'azul'>, default: 'white' }
})
const colorClasses = {
    white: 'bg-white text-diamondBlack hover:(bg-primary text-white) disabled:(bg-inactive text-diamondBlack)',
    azul: 'bg-#E2F1F2 text-primary hover:(bg-primary text-white) disabled:(bg-inactive text-diamondBlack)'
}

const buttonClasses = computed(() => [
    'flex text-2xl rounded-full p-3.25 transition-colors duration-500 ease-linear',
    colorClasses?.[props.color]
])
</script>