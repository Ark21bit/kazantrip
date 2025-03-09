<template>
    <h1 class="mx-auto max-w-211.5 w-full font-Montserrat text-6.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ data?.content?.title }}</h1>
    <div class="col-span-full border-t border-#EBEBEB pt-7.5 lg:pt-10 mt-7.5 lg:mt-10">
        <div class="max-w-211.5 wrapper mx-auto more-text-block">
            <div>
                <a class="w-fit font-medium leading-1.2 rounded-lg text-sm px-4 py-2.25 max-lg:py-1.5 max-lg:px-3 flex shrink-0 transition-bage duration-500 ease-linear bg-#E2F1F2 text-fblack hover:bg-primary hover:text-white" :href="data?.file" target="_blank">Скачать памятку</a>
            </div>
            <div>
                <p><span class="text-primary">Дорогой гость</span>, приглашаем вас в наши офисы экскурсий, где вы узнаете про популярные экскурсии, получите советы по выбору достопримечательностей, музеям и кафе! А ещё у нас есть бесплатная карта города, афиша мероприятий и купоны от партнёров)</p>
                <div>
                    <p>Ниже мы составили для вас список важных деталей, которые будут для вас полезными на экскурсиях:</p>
                    <ul>
                        <li>Если вы выбрали маршрут обзорной по городу или обзорной по городу с посещением Кремля, экскурсия <b>завершится</b> около Казанского Кремля.</li>
                        <li>Чтобы случайно не обжечься и не пролить напитки, мы <b>просим допить</b> их до посадки в автобус.</li>
                        <li>Надевайте <b>удобную одежду и обувь</b> (с учетом погоды!) и не забудьте воду и перекус на длительные маршруты.</li>
                        <li>Для комфорта на экскурсиях вы можете приобрести в нашем офисе зимой - карманную грелку, летом - воду и дождевик.</li>
                        <li>И вы, конечно, знаете, но мы напомним. ♡ Девушкам для входа в храм и мечеть <b>необходим платок</b>.</li>
                    </ul>
                </div>
                <div>
                    <a class="hover:text-primary transition-colors" :href="data?.file" target="_blank">Скачать памятку в pdf-формате.</a>
                </div>
                <div>

                    <h2 class="!text-primary">Приятных вам впечатлений!</h2>
                </div>
                <div>
                    <p>С заботой о вас и ваших впечатлениях, <br> Экскурсионный центр г. Казани</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SEO } from '~/types/fetch/shared'
interface Fetch {
    content: {
        title: string;
        text: string;
        text_1: string
    }
    file: string;
    seo: SEO;
}

const { data } = await useBaseFetch<Fetch>('search/page', {
    query: { key: 'reminder-tourists' },
    key: 'reminder-tourists'
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>