<template>
    <Splide :has-track="false" class="w-full flex flex-col lg:flex-row relative" :options="options">
        <SplideTrack class="overflow-visible max-w-full lg:[&>ul]:!flex lg:[&>ul]:!gap-5">
            <SplideSlide v-for="item in 2" class="w-full flex-shrink-0 lg:w-[calc(50%-10px)]">
                <h3 class="max-lg:hidden text-7 font-bold leading-1.2 font-Montserrat text-diamondBlack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
                <div class="lg:mt-7.5 flex flex-col gap-5 p-5 lg:pr-22 lg:p-6 last:mr-0 mr-5 lg:bg-[url(/imgs/pattern.svg)] bg-[position:top_0_right_24px] bg-repeat-y shadow-base rounded-2xl ring-(1 inset #F6F6F6)">
                    <h3 class="lg:hidden text-5.5 font-bold leading-1.2 font-Montserrat text-diamondBlack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
                    <p class="text-sm lg:text-base text-second leading-1.4 lg:leading-1.4 [&>a]:text-primary">Возможна организация экскурсии по индивидуальному запросу в удобное время, с удобным местом начала и окончания. Заявки на бронирование и расчет стоимости принимаются по почте <a
                            href="mailto:ex@kazantrip.ru">ex@kazantrip.ru</a> и по телефону <a href="tel:88002222161">8 800 2222 161</a></p>
                    <Button class="w-full lg:w-41" size="sm">Заказать</Button>
                </div>
            </SplideSlide>
        </SplideTrack>
        <SplidePagination class="mt-5" />
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
const options: Options = {
    breakpoints: {
        1024: {
            perPage: 2,
            destroy: true,
            pagination: false,
        }
    },
    pagination: true,
    gap: 20,
    perPage: 1,
    perMove: 1,
    mediaQuery: 'min',
    arrows: false,
    destroy: false,
}
</script>

