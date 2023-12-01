<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" size="2xl" class="flex flex-col gap-6" :is-show="isModalShow">
        <FormKit type="form" form-class="flex flex-col gap-6" :actions="false">
            <h2 class="text-5.5 lg:text-6.5 text-diamondBlack leading-1.2 font-bold [&>span]:text-primary max-w-[calc(100%-27px)]">Подарочный сертификат на экскурсию<span>(на 2 лица!)</span></h2>
            <div class="grid grid-cols-2 gap-4 lg:gap-4.5">
                <FormKit type="text" placeholder="Название экскурсии" outer-class="col-span-full"></FormKit>
                <FormKit type="text" placeholder="ФИО" outer-class="col-span-full"></FormKit>
                <FormKit type="email" placeholder="Email"></FormKit>
                <FormKit type="tel" placeholder="Телефон"></FormKit>
            </div>
            <div class="flex justify-between gap-3 text-xl lg:text-6.5 leading-1.2 font-semibold text-diamondBlack max-lg:-my-1">
                <p>Итого</p>
                <p class="text-primary">1999₽</p>
            </div>
            <FormKit type="text" placeholder="Способ оплаты"></FormKit>
            <div class="flex flex-col gap-4">
                <FormKit type="checkbox"><template #label>Подтверждаю согласие с условиями обработки персональных данных</template></FormKit>
                <FormKit type="checkbox"><template #label>Подтверждаю согласие с условиями предоставления экскурсионных услуг</template></FormKit>
            </div>
            <div class="flex flex-col lg:flex-row gap-3 lg:justify-between">
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