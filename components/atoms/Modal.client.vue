<template>
    <Teleport to="#teleported">
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 easy-linear" leave-active-class="transition-opacity duration-500 easy-linear">
            <template v-if="directive == 'if'">
                <div v-if="isShow" :class="modalOverlayClass" @keyup.esc="closeModal" tabindex="0" @mouseover.self="state = 'wait'" @mouseout.self="state = 'idle'" @mousedown.left.self="state = 'down'" @mouseup.left.self="state == 'down' && closeModal()">
                    <div :class="modalWrapperClass">
                        <!-- Modal content -->
                        <div v-bind="$attrs" :class="modalClass">
                            <button @click="closeModal" type="button" :class="modalCloseClass">
                                <slot name="close-icon">
                                    <Icon name="Close" size="24"></Icon>
                                </slot>
                            </button>
                            <slot />
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div v-show="isShow" :class="modalOverlayClass" @keyup.esc="closeModal" tabindex="0" @mouseover.self="state = 'wait'" @mouseout.self="state = 'idle'" @mousedown.left.self="state = 'down'" @mouseup.left.self="state == 'down' && closeModal()">
                    <div :class="modalWrapperClass">
                        <!-- Modal content -->
                        <div v-bind="$attrs" :class="modalClass">
                            <button @click="closeModal" type="button" :class="modalCloseClass">
                                <slot name="close-icon">
                                    <Icon name="Close" size="24"></Icon>
                                </slot>
                            </button>
                            <slot />
                        </div>
                    </div>
                </div>
            </template>
        </Transition>
    </Teleport>
</template>

<script lang="ts" setup>
type ModalSizes = '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const state = ref('idle')

const props = defineProps({
    overlayClass: String,
    wrapperClass: String,
    isShow: { type: Boolean, default: false },
    size: { type: String as PropType<ModalSizes>, default: '4xl' },
    closeClass: { type: String },
    directive: { type: String, default: 'if' },
    padding: { type: String, default: 'p-5 lg:p-7.5' }
})

const modalOverlayClass = computed(() => {
    return [
        props.overlayClass, 'bg-black/50 fixed z-40 overflow-y-auto top-0 left-0 w-full h-screen pr-4.25 group-[.modal-open-mobile]/body:pr-0'
    ]
})

const modalSizeClasses = {
    size: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
    }
}

const modalClass = computed(() => {
    return [
        'flex flex-col relative bg-white rounded-5 w-[calc(100%-var(--width-content-margin)*2)] pointer-events-auto shadow-base ring ring-inset ring-#F6F6F6',
        props.size && modalSizeClasses.size[props.size],
        props.padding
    ]
})

const modalWrapperClass = computed(() => {
    return [
        props.wrapperClass, 'overflow-hidden z-50 min-h-screen w-full py-6 pointer-events-none justify-center items-center flex',
    ]
})

const modalCloseClass = computed(() => {
    return [
        props.closeClass, 'text-second z-40 absolute top-4 right-4',
    ]
})

const closeModal = () => {
    emit('close')
}
</script>

