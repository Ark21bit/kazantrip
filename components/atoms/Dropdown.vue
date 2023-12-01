<template>
    <div class="relative">
        <div class="dropdown-header group/dropdownh">
            <button type="button" @click.self="toggle" class="transition flex gap-1.75 items-center text-left justify-between w-full">
                <slot name="dropdown-header-content" :class="['text-3.75 font-medium leading-1.25 group-hover/dropdownh:text-#39919A transition-colors', isShow ? 'text-primary' : 'text-white']" :isShow="isShow">
                    <span :class="class">{{ title }}</span>
                </slot>
                <slot name="dropdown-header-icon" :toggle="toggle" :isDropdownItemShow="isDropdownItemShow">
                    <Icon @click="toggle" name="ChevronDown" class="text-3.25 transition-transform group-hover/dropdownh:text-#39919A transition-colors hover:rotate-180" :class="[isShow ? 'text-primary' : 'text-white', { 'rotate-180': isDropdownItemShow }]"></Icon>
                </slot>
            </button>
        </div>
        <div v-show="isDropdownItemShow" class="flex flex-col overflow-hidden mt-2.25 shadow-base rounded-lg ring ring-inset ring-#F6F6F6 bg-white p-2.5 w-52.25 max-h-50" :class="aboslute ? 'absolute top-full left-0 min-w-full' : 'relative'">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    isShow: { type: Boolean, default: false },
    title: String,
    aboslute: { type: Boolean, default: false }
})

let isDropdownItemShow = ref(props.isShow)

const slots = defineSlots<{
    default: any,
    'dropdown-header-content'?: any,
    'dropdown-header-icon'?: any,
}>()

const toggle = () => { isDropdownItemShow.value = !isDropdownItemShow.value }
</script>


