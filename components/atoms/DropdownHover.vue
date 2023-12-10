<template>
    <div class="relative flex gap-0.5 items-center" :class="titleClasses" @mouseenter="isShow = true" @mouseleave="isShow = false">
        <slot name="title">
            {{ title }}
        </slot>
        <Icon name="ChevronDown" size="13" :class="{ 'rotate-180': isShow }" class="transition-transform duration-500 ease-linear p-0.5 box-content shrink-0"></Icon>
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 easy-linear" leave-active-class="transition-opacity duration-500 easy-linear">
            <div v-show="isShow" class="absolute top-full pt-2.25 w-max max-w-50 z-10">
                <div class="flex flex-col overflow-hidden shadow-base rounded-lg ring ring-inset ring-#F6F6F6 bg-white p-2.5 max-h-50">
                    <slot classes="text-sm leading-1.2 text-fblack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors"></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    dark: { type: Boolean, default: false }
})

const titleClasses = computed(() => ['text-3.75 font-medium leading-1.25 transition-colors duration-500 ease-linear hover:text-#39919A', props.dark ? 'text-white' : 'text-fblack'])

const isShow = ref(false)
</script>
