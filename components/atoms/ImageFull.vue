<template>
    <Teleport to="body">
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-300 ease-in-out" leave-active-class="transition-opacity duration-300 ease-in">
            <div v-if="isShow" :class="modalOverlayClass" @keyup.esc="closeModal" tabindex="0" @mouseover.self="state = 'wait'" @mouseout.self="state = 'idle'" @mousedown.left.self="state = 'down'" @mouseup.left.self="state == 'down' && closeModal()">
                <!-- Modal content -->
                <button @click="closeModal" type="button" :class="modalCloseClass">
                    <slot name="close-icon">
                        <span class="i-custom:close"></span>
                    </slot>
                </button>
                <div v-bind="$attrs" :class="modalClass">
                    <slot name="image"></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
    <slot :openModal="openModal"></slot>
</template>

<script lang="ts" setup>
defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const state = ref('idle')

const props = defineProps({
    overlayClass: String,
    wrapperClass: String,
    closeClass: { type: String },
})

const modalOverlayClass = computed(() => {
    return [
        props.overlayClass, 'flex items-center justify-center bg-black/75 backdrop-blur fixed z-40 top-0 left-0 w-full h-full mr-4.25 py-3 lg:py-6 group-[.modal-open-mobile]/body:mr-0'
    ]
})

const modalClass = computed(() => {
    return [
        'w-full h-full',
    ]
})

const modalCloseClass = computed(() => {
    return [
        props.closeClass, 'text-white hover:bg-white/10 p-3 rounded-full z-40 absolute text-xl lg:text-4xl [backdrop-filter:brightness(.6)] flex top-4 right-4 lg:top-6 lg:right-6',
    ]
})

const isShow = defineModel('isShow', { default: false, type: Boolean })



const scrollWidth = useState<{ width: number, isScroll: boolean }>('scrollWidth')

const openModal = () => {
    isShow.value = true;
    document.querySelector("body")?.classList.add('modal-open')
    if (scrollWidth.value.width === 0 || !scrollWidth.value.isScroll === true) return document.querySelector("body")?.classList.add('modal-open-mobile')
};

const closeModal = () => {
    isShow.value = false;
    setTimeout(() => {
        document.querySelector("body")?.classList.remove('modal-open');
        document.querySelector("body")?.classList.remove('modal-open-mobile')
    }, 500)
};

onUnmounted(() => {
    document.querySelector("body")?.classList.remove('modal-open-mobile')
    document.querySelector("body")?.classList.remove('modal-open')
});
</script>

