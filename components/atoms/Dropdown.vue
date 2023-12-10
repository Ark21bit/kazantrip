<template>
    <div class="relative">
        <div class="dropdown-header group/dropdownh">
            <button type="button" @click.self="toggle" class="transition flex gap-1.75 items-center text-left justify-between w-full"
                :class="['text-3.75 font-medium leading-1.25 group-hover/dropdownh:text-#39919A transition-colors', isDropdownItemShow ? 'text-primary' : dark ? 'text-white' : 'text-fblack']">
                <slot name="dropdown-header-content" :isShow="isShow">
                    {{ title }}
                </slot>
                <slot name="dropdown-header-icon" :toggle="toggle" :isDropdownItemShow="isDropdownItemShow">
                    <Icon @click="toggle" name="ChevronDown" class="text-5.25 transition-transform group-hover/dropdownh:text-#39919A transition-colors hover:rotate-180" :class="{ 'rotate-180': isDropdownItemShow }"></Icon>
                </slot>
            </button>
        </div>
        <div v-show="isDropdownItemShow" class="flex flex-col overflow-hidden mt-5 gap-3.75">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    isShow: { type: Boolean, default: false },
    title: String,
    dark: { type: Boolean, default: false }
})

let isDropdownItemShow = ref(props.isShow)

const slots = defineSlots<{
    default: any,
    'dropdown-header-content'?: any,
    'dropdown-header-icon'?: any,
}>()

const toggle = () => { isDropdownItemShow.value = !isDropdownItemShow.value }
</script>


