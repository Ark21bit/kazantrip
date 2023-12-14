<template>
    <FormKit v-model="modelValue" type="datepickerC" outer-class="[&_input]:!hidden datepicker-catalog" :minDate="$dayjs().toDate()" teleport inner-class="$remove:bg-#F2F8F8 $remove:border-#E8E8E8 border-primary overflow-hidden" inputIconClass="$remove:text-fblack text-primary transition duration-500 ease-linear"></FormKit>
</template>

<script setup lang="ts">
const modelValue = defineModel()
</script>
<style>
.datepicker-catalog .dp__input_icon {
    padding: 13px;
    width: auto;
    transition: all linear 500ms;
    position: static;
    transform: none;
}

.datepicker-catalog .dp__input_icon:hover,
.datepicker-catalog .dp__input_focus+div .dp__input_icon {
    background-color: #39919A;

}

.datepicker-catalog .dp__input_icon:hover .formkit-input-icon,
.datepicker-catalog .dp__input_focus+div .dp__input_icon .formkit-input-icon {
    color: white;
}

.datepicker-catalog .dp__input_icon {
    --dp-icon-color: white: !important;
}
</style>