<template>
    <div class="fixed top-0 right-0 z-50 flex flex-col gap-2 pt-3 group-[.modal-open]/body:mr-4.25 group-[.modal-open.modal-open-mobile]/body:mr-0'">
        <TransitionGroup v-bind="transition">
            <Toast v-bind="toast" v-for="toast in toasts" :key="toast.id" :id="toast.id"></Toast>
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
const { toasts } = useToast()

const transition = {
    enterFromClass: 'opacity-0 translate-x-0 translate-y-1/2 translate-z-0',
    enterActiveClass: 'transition-transform transition-opacity duration-300',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'transition-all duration-500 ease-in',
    leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
}
</script>