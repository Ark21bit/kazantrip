<template>
    <Modal size="md" @close="closeModal" class="min-h-60 lg:min-h-80 flex flex-col gap-6" :is-show="isModalShow">
        <img class="w-49 h-24 mt-2.5 mx-auto" src="/thanksBg.png" alt="">
        <p class="text-xl lg:text-2xl text-fblack leading-tight lg:leading-tight text-center">{{ generalConfig?.static_info?.global_words?.check_data_and_send_order }}</p>
        <Button @click="closeModal()" class="mt-auto mx-auto w-full lg:w-49" variant="outline" color="green">{{ generalConfig?.static_info?.global_words?.close }}</Button>
    </Modal>
</template>

<script setup>
const props = defineProps({
    open: { type: Boolean, default: true }
})
const { closeModal, isModalShow, openModal } = useModal()
openModal()

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>