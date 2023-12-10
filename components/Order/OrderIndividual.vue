<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" size="2xl" class="flex flex-col gap-6" :is-show="isModalShow">
        <FormKit type="form" form-class="flex flex-col gap-1 lg:gap-6" :actions="false">
            <div class="flex flex-col gap-3">
                <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-bold [&>span]:text-primary max-w-[calc(100%-27px)]">Не нашли подходящую экскурсию?</h2>
                <p class="text-sm text-second leading-1.4">Отправьте заявку на индивидуальную экскурсию, и мы свяжемся с вами!</p>
            </div>
            <div class="grid grid-cols-2 gap-4 lg:gap-4.5">
                <FormKit type="text" placeholder="Название экскурсии" outer-class="col-span-full"></FormKit>
                <FormKit type="text" placeholder="ФИО" outer-class="col-span-full"></FormKit>
                <FormKit type="date" placeholder="Дата экскурсии"></FormKit>
                <FormKit type="email" placeholder="Email/Телефон"></FormKit>
            </div>
            <div class="flex flex-col lg:flex-row gap-3 lg:justify-between mt-1 lg:mt-0">
                <Button class="w-full lg:w-49">Купить</Button>
                <Button @click="closeModal" class="w-full lg:w-49" type="button" variant="outline">Отменить</Button>
            </div>
        </FormKit>
    </Modal>
</template>
<script setup lang="ts">
defineOptions({
    inheritAttrs: false,
})
const { closeModal, isModalShow, openModal } = useModal()
</script>