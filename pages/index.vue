<template>
    <div class="col-span-full">
        <SplideIndex class=""></SplideIndex>
    </div>
    <div class="flex flex-col lg:flex-row gap-5 mt-7.5 lg:mt-12.5 justify-between">
        <Button class="max-lg:w-full">Посмотреть актуальное расписание</Button>
        <div class="flex flex-col lg:flex-row gap-2.5 lg:gap-5 max-lg:border-t border-#E2E2E2 max-lg:pt-5">
            <FormKit type="datepickerC" outer-class="w-full lg:w-39.5"></FormKit>
            <Button class="max-lg:w-full">Подобрать экскусрию</Button>
        </div>
    </div>
    <SplideExcursions class="py-5 mt-5 lg:mt-10"></SplideExcursions>
    <div class="flex flex-col gap-7.5 lg:gap-10 mt-15 lg:mt-20">
        <h2 class="font-Montserrat text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-diamondBlack">Доступные экскурсии</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-y-7.5">
            <CardCatalog v-for="n in 10"></CardCatalog>
            <Button class="col-span-full lg:mx-auto mt-2.5 lg:mt-0">Больше экскурсий</Button>
        </div>
    </div>
    <FeedbackFormContainer subTitle="Отправьте заявку на индивидуальную экскурсию, и мы свяжемся с вами!" title="Не нашли подходящую экскурсию?" img="/imgs/feedback.png" class="mt-25 lg:mt-37.5">
        <FormKit type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
            <FormKit input-class="max-lg:text-sm" placeholder="Название экскурсии" outer-class="col-span-full" type="text"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="ФИО" type="text" outer-class="col-span-full"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="Email/Номер телефона" type="text"></FormKit>
            <FormKit input-class="max-lg:text-sm" placeholder="Дата экскурсии" type="datepickerC"></FormKit>
            <FormKit input-class="max-lg:text-sm h-30 lg:h-46.25" placeholder="Ваши пожелания" outer-class="col-span-full" type="textarea"></FormKit>
            <Button class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">Отправить</Button>
        </FormKit>
    </FeedbackFormContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-15 lg:mt-37.5">
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-diamondBlack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2"><span class="text-#FF3D15">Яндекс</span> отзывы</h3>
            <p class="text-second text-sm leading-1.4">Прочитайте отзывы наших гостей!</p>
            <Button size="sm" class="w-41 mt-auto">Подробнее</Button>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 border-(#F6F6F6 1) bg1 bg-cover bg-center bg-black/50 rounded-5">
            <h3 class="text-white text-lg lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">Эксклюзивная экскурсия в закулисье цирка!</h3>
            <Button size="sm" class="w-41 mt-auto" color="yellow">Подробнее</Button>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-diamondBlack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">Индивидуальные эксркусии</h3>
            <Button size="sm" class="w-41 mt-auto">Подробнее</Button>
        </div>
    </div>
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold font-Montserrat text-diamondBlack wrapper">Наши партнеры</h2>
        <SplidePartners class="mt-7.5 lg:mt-10" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'main'
})
</script>