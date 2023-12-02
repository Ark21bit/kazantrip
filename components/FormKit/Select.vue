<template>
    <button v-on-click-outside="close" @click="isShow = !isShow" :data-expented="isShow" class="formkit-selector [&>img]:w-full" type="button" :class="context.classes.input">
        <span class="formkit-select-text" :class="selectOptions ? context.classes.selectText : context.classes.placeholder">{{ selectOptions ? selectOptions : context.placeholder}}</span>
        <span class="formkit-select-icon formkit-icon" :class="[{ 'rotate-180': isShow }, context.classes.selectIcon]">
            <slot name="select-icon">
                <Icon name="ChevronDown"></Icon>
            </slot>
        </span>
    </button>
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 easy-linear" leave-active-class="transition-opacity duration-500 easy-linear">
        <div v-show="isShow" class="formkit-dropdown-wrapper" :class="context.classes.dropdownWrapper">
            <ul class="formkit-listbox" role="listbox" :class="context.classes.listbox">
                <li v-for="{ label, value }  in  options" @click="handleInput(value)" class="formkit-listitem" :class="[context.classes.listitem, value == context.value ? context.classes.listitemSelect : null]">
                    {{ label }}
                </li>
            </ul>
        </div>
    </Transition>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
const props = defineProps({
    context: Object,
})

const isShow = ref(false)

const close = () => {
    isShow.value = false
}

const options = computed(() => {
    if (Array.isArray(props.context.options)) {
        if (props.context.options.some(a => typeof a === 'string')) {
            return props.context.options.map((option) => {
                return { label: option, value: option }
            })
        }
        return props.context.options
    }
})

watch(options, (newValue) => {
    if (newValue.find(a => a.label === selectOptions.value && a.value === props.context.value) || (props.context.value === null && props.context.value === undefined)) return
    props.context.node.input(null)
})

const selectOptions = computed(() => options.value?.find(a => a.value == props.context.value)?.label)

function handleInput(value) {
    if (value == props.context.value) return props.context.node.input(null)
    props.context.node.input(value)
    close()
}
</script>
