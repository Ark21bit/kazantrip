<template>
    <div class="mt-7.5 lg:mt-10">
        <h2 class="text-fblack text-xl lg:text-2xl font-Montserrat font-bold leading-1.2 lg:leading-1.2">{{ text[locale as 'ru' | 'en'] }}</h2>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const text = {
    ru: 'Оплата прошла неудачно, попробуйте еще раз',
    en: ''
}
</script>