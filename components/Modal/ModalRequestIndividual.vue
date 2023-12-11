<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" size="2xl" :is-show="isModalShow">
        <template v-if="true">
            <FormKit @submit="submit" v-model="forms" type="form" form-class="flex flex-col gap-6" :actions="false">
                <div class="flex flex-col gap-3 mt-1 lg:mt-0">
                    <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-Montserrat font-bold [&>span]:text-primary max-w-[calc(100%-27px)]">{{ 'Не нашли подходящую экскурсию ?' }}</h2>
                    <p class="text-sm leading-1.4 text-second">Отправьте заявку на индивидуальную экскурсию, и мы свяжемся с вами!</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5">
                    <FormKit name="name" validation="required" type="text" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" outer-class="col-span-full" />
                    <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" outer-class="col-span-full" />
                    <FormKit name="date" type="datepickerC" :validation-label="generalConfig?.static_info?.global_words?.product_date" :placeholder="generalConfig?.static_info?.global_words?.product_date"></FormKit>
                    <FormKit name="client_email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
                </div>
                <div class="flex flex-col lg:flex-row gap-3 lg:justify-between">
                    <Button class="w-full lg:w-49">{{ generalConfig?.static_info?.global_words?.send }}</Button>
                    <Button @click="closeModal" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
                </div>
            </FormKit>
        </template>
    </Modal>
</template>

<script setup lang="ts">
const { closeModal, isModalShow, openModal } = useModal()
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const forms = ref()
const submit = () => {

}
</script>