<template>
    <SliderOne class="col-span-full h-100 lg:h-150"></SliderOne>
    <Breadcrumbs class="max-lg:hidden mt-7.5"></Breadcrumbs>
    <div class="mt-7.5 flex gap-1.5 flex-wrap">
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Горячий чай</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Вода</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Дождевик</span>
        </div>
        <div class="flex gap-2.5 items-center rounded-full text-sm leading-1.2 px-4 py-1.125 text-white bg-primary">
            <img src="/icons.svg" alt="" class="w-6 h-6">
            <span>Грелка</span>
        </div>
    </div>
    <div class="col-span-full mt-7.5 lg:mt-10 pb-7.5 border-b border-#EBEBEB">
        <div class="wrapper flex flex-col gap-5 lg:gap-7.5 items-start">
            <h1 class="text-6.5 lg:text-9.5 leading-1.2 font-bold font-Montserrat text-fblack max-w-262">ТЁПЛАЯ обзорная по Казани с посещением Казанского Кремля</h1>
            <p class="text-second text-base leading-1.4 mt-2.5 lg:mt-0">«Тёплая обзорная» – это обзорная автобусная экскурсия по городу Экскурсионного центра г.Казани, на которой вы не замерзнете. Мы продумали маршрут так, чтобы в холодную погоду вы меньше были на улице и больше времени проводили внутри
                объектов. В
                середине маршрута мы обязательно попьем
                горячий
                чай. В автобусе будет тепло и комфортно, а чтобы не было ни малейшего шанса замерзнуть на улице мы подготовили для вас карманные грелки. Эта автобусно-пешеходная экскурсия длится 3,5 часа и подходит тем, кто приехал в Казань впервые.Во время экскурсии вы увидите центральные улицы города
                и
                познакомитесь с их историей. Прогуляетесь по Казанскому Кремлю, посмотрите на Театр оперы и балета, Казанский федеральный университет, городскую Ратушу и окутанное легендами озеро Кабан.Экскурсия предусматривает прогулку по Старо-татарской слободе - торговому, ремесленному, духовному и
                культурному центру казанских татар. Здесь для гостей подготовлен вкусный сюрприз: сладкая дегустация с чаепитием под увлекательные рассказы профессионального экскурсовода. Во время экскурсии предусмотрено посещение Богородицкого мужского монастыря, места обретения знаменитой Казанской
                иконы
                Божией Матери.Пешеходная часть экскурсии начнется у стен Казанского Кремля. Вы увидите величественную мечеть Кул-Шариф изнутри, заглянете в Благовещенский собор, насладитесь видами Казани со смотровой площадки и узнаете, почему Башня Сююмбике падающая. Ждём вас на экскурсии!</p>
            <Button to="/test" variant="link" size="lg" padded :tag="CustomLink">Показать больше</Button>
        </div>
    </div>
    <div class="mt-7.5 lg:mt-15 flex gap-5 flex-wrap">
        <Button class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Panorama" class="text-2xl"></Icon>
            </template>
            Круговая фотопанорама
        </Button>
        <Button class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Video" class="text-2xl"></Icon>
            </template>
            Видеообзоры наших туристов
        </Button>
        <Button class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
            <template #prefix>
                <Icon name="Audio" class="text-2xl"></Icon>
            </template>
            Краткая аудиоэкскурсия
        </Button>
    </div>
    <div class="mt-7.5 grid lg:grid-cols-[1fr_1.03fr_1fr] rounded-5 ring-(inset 1 #F6F6F6) shadow-base">
        <div class="p-5 lg:p-6 border-b lg:border-r border-#EBEBEB flex flex-col justify-center gap-1.5">
            <p class="text-sm leading-1.2 text-fblack">Ближайшая экскурсия:</p>
            <p class="text-2xl font-semibold leading-1.2 text-primary">29 октября</p>
        </div>
        <div class="p-5 lg:p-6 border-b lg:border-r border-#EBEBEB flex flex-col justify-center gap-1.5">
            <p class="text-sm leading-1.2 text-fblack">Стоимость экскурсии:</p>
            <p class="text-2xl font-semibold leading-1.2 text-primary">1999₽<span class="ml-1.5 leading-1.2 text-#A4A4A4 text-sm line-through decoration-fblack">1350₽</span></p>
        </div>
        <div class="p-5 py-6 lg:p-6 flex flex-col justify-center gap-1.5">
            <OrderIndividual #="{ openModal }">
                <Button @click="openModal" class="w-full">Заказать экскурсию</Button>
            </OrderIndividual>
        </div>
    </div>
    <div class="mt-15 lg:mt-22">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Общее описание</h2>
            <div class="flex gap-1.5 items-center flex-wrap">
                <p class="mr-1">Партнер:</p>
                <div class="ring-(1 inset primary) text-primary py-2 px-4 rounded-full text-sm leading-1.2">Имя партнера 1</div>
                <div class="ring-(1 inset primary) text-primary py-2 px-4 rounded-full text-sm leading-1.2">Имя партнера 1</div>
            </div>
        </div>
        <div class="mt-5 lg:mt-7.5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Calendar" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Ближайшая дата</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">25 февраля</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Time" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Продолжительность</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">10 ч. 00 мин</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Trail" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Вид экскурсии</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">Пешеходная</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
                <Icon name="Radiogid" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                <p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Радиогид</p>
                <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">Да (бесплатно)</p>
            </div>
            <div class="ring-(inset 1 #F6F6F6) rounded-5 bg-white shadow-base col-span-full lg:col-span-3">
                <div class="p-4 pb-3 lg:p-5 flex gap-2.5 lg:gap-3.75 items-center">
                    <Icon name="Map" class="text-8 lg:text-10 bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg"></Icon>
                    <p class="text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Радиогид</p>
                </div>
                <div class="flex flex-col lg:flex-row lg:border-t border-#EBEBEB">
                    <div class="flex-1 py-3 lg:py-5 p-5 border-t lg:border-r lg:last:border-r-none border-#EBEBEB">
                        <p class=" text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Отель Татарстан</p>
                        <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">Пушкина, 4</p>
                    </div>
                    <div class="flex-1 py-3 lg:py-5 p-5 border-t lg:border-r lg:last:border-r-none border-#EBEBEB">
                        <p class=" text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Отель Татарстан</p>
                        <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">Б.Шахиди, 7</p>
                    </div>
                    <div class="flex-1 py-3 lg:py-5 p-5 border-t lg:border-r lg:last:border-r-none border-#EBEBEB">
                        <p class=" text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">Отель Татарстан</p>
                        <p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">Пушкина, 2</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-10 lg:mt-25 bg-[url(/imgs/trailMBg.svg)] lg:bg-[url(/imgs/trailBg.svg)] col-span-full bg-no-repeat pt-23.5 lg:pt-26 pb-20 lg:pb-33.75 bg-[length:100%_100%]">
        <div class="wrapper">
            <h2 class="max-lg:hidden text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Маршрут</h2>
            <SliderTrail class="mt-5 lg:mt-16" />
        </div>
    </div>
    <div class="mt-10 lg:mt-17.5">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Все цены</h2>
        <div class="grid relative grid-cols-[repeat(auto-fit,minmax(122px,1fr))] mt-5 lg:mt-7.5 p-3.75 py-5 lg:px-5 lg:py-6 gap-y-5 gap-4 lg:gap-5 bg-#E2F1F2 rounded-5">
            <div v-for="n in 5" class="flex flex-col gap-1.5 lg:gap-2 p-4 lg:p-5 rounded-5 ring-(1 inset #F6F6F6) font-semibold bg-white">
                <p class="text-fblack text-sm lg:text-base leading-1.4 lg:leading-1.4">Взрослый</p>
                <p class="text-primary text-2xl lg:text-8 leading-1.25 lg:leading-1.25 flex flex-col lg:flex-row gap-x-1.5">1999₽<span class="line-through lg:mb-2.5 text-#A4A4A4 leading-1.2 decoration-fblack text-sm">1350₽</span></p>
            </div>
            <div class="absolute max-lg:-translate-1/2 top-0 lg:-top-4 lg:-translate-y-full left-16% rounded-full w-2 aspect-square bg-#F7C03F"></div>
            <div class="absolute top-12.75 lg:top-0 left-0 lg:left-full -translate-1/2 rounded-full aspect-square w-3.75 lg:w-9.75 bg-primary"></div>
            <div class="absolute bottom-0 lg:-bottom-6.75 translate-y-1/2 lg:translate-y-full left-60% lg:left-2.5 rounded-full w-3.5 lg:w-5.75 aspect-square bg-primary"></div>
            <div class="max-lg:hidden absolute -bottom-5 translate-y-full right-22% rounded-full w-3.5 aspect-square bg-#F7C03F"></div>
        </div>
    </div>
    <div class="mt-15 lg:mt-25">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">В стоимость входит</h2>
        <ul class="mt-5 lg:mt-7.5 grid lg:grid-cols-4 gap-4 lg:gap-5 text-base lg:text-lg leading-1.2 lg:leading-1.2 font-medium text-#333 ">
            <li class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">Транспортные услуги</li>
            <li class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">Входные билеты в музей-заповедник «Казанский Кремль»</li>
            <li class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">Входной билет в музей «Дом Лекаря»</li>
            <li class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">Входной билет в музей «Дом Лекаря»</li>
        </ul>
    </div>
    <SliderPurple class="mt-15 lg:mt-25"></SliderPurple>
    <div class="mt-15 lg:mt-25 col-span-full pb-7.5 border-b border-#EBEBEB">
        <SeoBlock class="wrapper"></SeoBlock>
    </div>
    <div class="mt-15 lg:mt-25">
        <div class="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Отзывы</h2>
            <ReviewsModalCreate #="{ openModal }">
                <Button @click="openModal">Оставить отзыв</Button>
            </ReviewsModalCreate>
        </div>
        <ReviewsSlider class="mt-7.5 lg:mt-10" />
    </div>
    <div class="mt-15 lg:mt-25">
        <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">Похожие экскурсии</h2>
        <SliderRecomendations class="mt-5 lg:mt-10" />
    </div>
</template>

<script setup lang="ts">
import CustomLink from '~/components/atoms/CustomLink.vue';
</script>