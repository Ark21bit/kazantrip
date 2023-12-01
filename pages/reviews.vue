<template>
    <div class="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 gap-7.5">
        <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-diamondBlack">Все отзывы</h1>
        <Button>Оставить отзыв</Button>
    </div>
    <SplideReviews class="mt-7.5 lg:mt-10"></SplideReviews>
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-7 leading-1.2 font-Montserrat text-diamondBlack font-bold">Яндекс отзывы</h2>
        <div class="mt-7.5 lg:mt-10 rounded-2xl border border-#F6F6F6 bg-#EFE9E9 w-full h-187.5 lg:h-196.5">

        </div>
    </div>
    <FeedbackFormContainer subTitle="Расскажите о ваших впечатлениях от поездки" title="Оставить <span>отзыв</span>" img="/imgs/reviewForm.png" class="mt-20 lg:mt-37.5">
        <FormKit type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
            <FormKit input-class="max-lg:text-sm" placeholder="Название экскурсии" outer-class="col-span-full" type="text"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="ФИО" type="text" outer-class="col-span-full"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="Email" type="email"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="Дата экскурсии" type="date"></FormKit>
            <FormKit input-class="max-lg:text-sm h-30 lg:h-46.25" placeholder="Ваши впечатления от поездки" outer-class="col-span-full" type="textarea"></FormKit>
            <Button class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">Отправить</Button>
        </FormKit>
    </FeedbackFormContainer>
</template>

<script setup lang="ts">

</script>