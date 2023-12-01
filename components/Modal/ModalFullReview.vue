<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" size="2xl" class="flex flex-col gap-6" :is-show="isModalShow">
        <div class="flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div class="flex items-center gap-3 lg:gap-4">
                <Avatar size="sm" class="max-lg:w-13 max-lg:h-13"></Avatar>
                <div class="text-sm lg:text-base font-medium text-primary flex flex-col gap-3 lg:gap-2">
                    <p class="text-diamondBlack font-semibold text-base lg:text-lg leading-1.2 lg:leading-1.2">Иван Иванов</p>
                    <p>Древний город Болгар</p>
                </div>
            </div>
            <Rating></Rating>
        </div>
        <p class="text-diamondBlack text-sm lg:text-base leading-1.4 lg:leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно) менеджеры все понятно объяснили, гид очень интересно рассказывал, побывали во всех местах
            исторического центра) и особенно
            понравился Казанский Кремль)Приедем еще раз, но уже летом)</p>
        <p class="mt-auto text-sm leading-1.4 text-#7B7B7B">21.12.2022</p>
    </Modal>
</template>

<script setup lang="ts">
defineOptions({
    inheritAttrs: false,
})
const { closeModal, isModalShow, openModal } = useModal()
</script>