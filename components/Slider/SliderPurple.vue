<template>
    <ModalRequestIndividual #default="{ openModal }">
        <Swiper class="w-full flex flex-col lg:flex-row relative contain-layout overflow-visible" v-bind="options, $attrs">
            <SwiperSlide class="flex flex-col">
                <h3 class="max-lg:hidden text-7 font-bold leading-1.2 font-Montserrat text-fblack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
                <div class="lg:mt-7.5 flex flex-col gap-5 p-5 lg:pr-22 lg:p-6 last:mr-0 mr-5 lg:bg-[url(/imgs/pattern.svg)] bg-[position:top_0_right_24px] grow bg-repeat-y shadow-base rounded-2xl ring-(1 inset #F6F6F6)">
                    <h3 class="lg:hidden text-5.5 font-bold leading-1.2 font-Montserrat text-fblack [&>span]:text-primary"><span>Индивидуальная</span> экскурсия</h3>
                    <p class="text-sm lg:text-base text-second leading-1.4 lg:leading-1.4 [&>a]:text-primary">Возможна организация экскурсии по индивидуальному запросу в удобное время, с удобным местом начала и окончания. Заявки на бронирование и расчет стоимости принимаются по почте <a
                            href="mailto:ex@kazantrip.ru">ex@kazantrip.ru</a> и по телефону <a href="tel:88002222161">8 800 2222 161</a></p>
                    <Button @click="openModal" class="w-full lg:w-41 mt-auto" size="sm">{{ generalConfig?.static_info?.global_words?.order }}</Button>
                </div>
            </SwiperSlide>
            <SwiperSlide class="flex flex-col">
                <h3 class="max-lg:hidden text-7 font-bold leading-1.2 font-Montserrat text-fblack [&>span]:text-primary">Организация <span>тура</span></h3>
                <div class="lg:mt-7.5 flex flex-col gap-5 p-5 lg:pr-22 lg:p-6 last:mr-0 mr-5 lg:bg-[url(/imgs/pattern.svg)] bg-[position:top_0_right_24px] grow bg-repeat-y shadow-base rounded-2xl ring-(1 inset #F6F6F6)">
                    <h3 class="lg:hidden text-5.5 font-bold leading-1.2 font-Montserrat text-fblack [&>span]:text-primary">Организация <span>тура</span></h3>
                    <p class="text-sm lg:text-base text-second leading-1.4 lg:leading-1.4 [&>a]:text-primary">По вопросам организации многодневного тура, включающего экскурсию "ТЁПЛАЯ обзорная по Казани с посещением Казанского Кремля" обращайтесь по телефону <a href="tel:+7 927 487 03 00">+7 927 487 03
                            00</a> и электронной почте
                        <a href="mailto:ex@kazantrip.ru">ex@kazantrip.ru</a>
                    </p>
                    <Button @click="openModal" class="w-full lg:w-41 mt-auto" size="sm">{{ generalConfig?.static_info?.global_words?.order }}</Button>
                </div>
            </SwiperSlide>
            <SliderPagination color="gray" class="mt-5 lg:hidden" />
        </Swiper>
    </ModalRequestIndividual>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper/modules';
defineOptions({
    inheritAttrs: false
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const options = {
    modules: [Mousewheel, Pagination],
    mousewheel: {
        forceToAxis: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            pagination: {
                enabled: false
            },
        }
    },
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
    },
    spaceBetween: 20,
    slidesPerView: 1,
}
</script>

