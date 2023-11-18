<template>
    <div class="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 gap-7.5">
        <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-diamondBlack">Все отзывы</h1>
        <Button>Оставить отзыв</Button>
    </div>
    <SwiperReviews class="mt-7.5 lg:mt-10"></SwiperReviews>
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-7 leading-1.2 font-Montserrat text-diamondBlack font-bold">Яндекс отзывы</h2>
        <div class="mt-7.5 lg:mt-10 rounded-2xl border border-#F6F6F6 bg-#EFE9E9 w-full h-187.5 lg:h-196.5">

        </div>
    </div>
    <div class="relative mt-20 lg:mt-37.5 lg:p-10 lg:bg-[url(/imgs/bgBorder.png)] bg-cover lg:rounded-5">
        <img class="z-1 lg:hidden absolute top-0 left-0 -translate-y-1/2" src="/imgs/review2.svg" alt="">
        <img class="z-1 lg:hidden absolute top-0 right-0 -translate-y-1/2" src="/imgs/review1.svg" alt="">
        <div class="z-1 lg:hidden absolute top-0 left-30 -translate-y-2/3 w-3.5 h-3.5 bg-#F7C03F rounded-full"></div>
        <div class="z-1 lg:hidden absolute top-10 right-5 w-2 h-2 bg-#F7C03F rounded-full"></div>
        <div class="flex flex-col lg:flex-row gap-5 max-lg:border border-#F6F6F6 p-5 lg:p-10 rounded-5 bg-white">
            <div class="flex flex-col gap-4 flex-1">
                <h2 class="text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-diamondBlack font-Montserrat  max-lg:text-center">Оставить <span class="text-primary">отзыв</span></h2>
                <p class="text-second text-sm leading-1.4 max-lg:text-center">Расскажите о ваших впечатлениях от поездки</p>
                <img src="/imgs/reviewForm.png" class="max-lg:hidden -translate-x-10 translate-y-10  mt-auto max-h-95 object-contain object-left" alt="">
            </div>
            <div class="flex-[1.165_1_0%]">
                <FormKit type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
                    <FormKit input-class="max-lg:text-sm" placeholder="Название экскурсии" outer-class="col-span-full" type="text"></FormKit>
                    <FormKit input-class="max-lg:text-sm" placeholder="ФИО" type="text" outer-class="col-span-full"></FormKit>
                    <FormKit input-class="max-lg:text-sm" placeholder="Email" type="email"></FormKit>
                    <FormKit input-class="max-lg:text-sm" placeholder="Дата экскурсии" type="date"></FormKit>
                    <FormKit input-class="max-lg:text-sm h-30 lg:h-46.25" placeholder="Ваши впечатления от поездки" outer-class="col-span-full" type="textarea"></FormKit>
                    <Button class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">Отправить</Button>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>