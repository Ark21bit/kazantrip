<template>
    <Swiper class="w-full flex relative" :options="options">
        <swiper-slide v-for="item in 2" class="w-full flex-shrink-0 lg:w-[calc(50%-10px)]">
            <h3 class="max-lg:hidden text-7 font-bold leading-1.2 font-Montserrat text-diamondBlack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
            <div class="lg:mt-7.5 flex flex-col gap-5 p-5 lg:pr-22 lg:p-6 last:mr-0 mr-5 lg:bg-[url(/imgs/pattern.svg)] bg-[position:top_0_right_24px] bg-repeat-y shadow-base rounded-2xl ring-(1 inset #F6F6F6)">
                <h3 class="lg:hidden text-5.5 font-bold leading-1.2 font-Montserrat text-diamondBlack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
                <p class="text-sm lg:text-base text-second leading-1.4 lg:leading-1.4 [&>a]:text-primary">Возможна организация экскурсии по индивидуальному запросу в удобное время, с удобным местом начала и окончания. Заявки на бронирование и расчет стоимости принимаются по почте <a href="mailto:ex@kazantrip.ru">ex@kazantrip.ru</a> и по телефону <a href="tel:88002222161">8 800 2222 161</a></p>
                <Button class="w-full lg:w-41" size="sm">Заказать</Button>
            </div>
        </swiper-slide>
    </Swiper>
</template>

<script lang="ts" setup>
import { Mousewheel, Pagination } from "swiper/modules";
import type { SwiperOptions } from 'swiper/types';
const options: SwiperOptions = {
    mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true
    },
    pagination: { clickable: true, enabled: true },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            pagination: { enabled: false },
        }
    },
    spaceBetween: 20,
    slidesPerView: 1,
    modules: [Mousewheel, Pagination],
    injectStyles: [
        `
        .swiper {
            display:flex;
            overflow:visible;
            flex-direction:column;
        }
        .swiper-pagination {
            display:flex;
            gap:8px;
            margin-top:20px;
            flex-wrap:wrap;
            justify-content: center;
        }
        .swiper-pagination-bullet {
            width:10px;
            height:10px;
            border-radius:10px;
            background:#E9E9E9;
            display:block;
            transition: background .5s linear;
            flex-shrink:0;
            cursor:pointer;
        } 
        .swiper-pagination.swiper-pagination-disabled {
            display:none;
        } 
        .swiper-pagination-bullet-active  {           
            background:#39919A;
        } 
      `,
    ],
}
</script>

