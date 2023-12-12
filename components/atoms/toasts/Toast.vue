<template>
    <div class="rounded-md w-full max-w-120" :class="wrapperClass" role="alert">
        <div class="flex items-start py-5 px-7 gap-2">
            <Icon :name="icon" class="text-2xl shrink-0"></Icon>
            <div class="text-base font-normal flex gap-1 flex-col flex-1 grow shrink ml-4">
                <span class="font-bold block">{{ title }}</span>
                <template v-if="true">
                    <ul v-if="Array.isArray(messages)" class="text-sm">
                        <li v-for="message in messages">{{ message }}</li>
                    </ul>
                    <span v-else class="block text-sm">{{ messages }}</span>
                </template>
            </div>
            <button @click="deleteToast(id)" class="flex p-1 rounded-full bg-transparent transition duration-200 ease-in-out ml-auto overflow-hidden hover:bg-white/30" type="button">
                <Icon name="material-symbols:close-rounded" class="shrink-0 text-lg"></Icon>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Toasts } from '~/types/toast';

const props = withDefaults(defineProps<Toasts & { duration?: number }>(), {
    duration: 10000,
    severity: 'info'
})

const { del: deleteToast } = useToast()

useTimeoutFn(() => {
    deleteToast(props.id)
}, props.duration)

const icon = computed(() => {
    if (props.severity == 'error') return 'bx:bxs-error-alt'
    return 'bx:bxs-error-alt'
})

const wrapperClass = computed(() => {
    if (props.severity == 'error') return 'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700'
})
</script>
