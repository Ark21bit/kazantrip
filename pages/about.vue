<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-diamondBlack mt-10 lg:mt-20">О нас</h1>
    <p class="mt-5 lg:mt-7.5 font-semibold leading-1.4 text-base lg:text-xl max-w-211.75 text-diamondBlack [&>span]:text-primary">
        Экскурсионный центр города Казани открылся в <span>2010</span> году и был <span>первым</span>, кто стал проводить сборные ежедневные экскурсии по <span>Казани</span> и <span>Татарстану</span>.
    </p>
    <div class="border-b border-#EBEBEB mt-7.5 lg:mt-10 col-span-full">
        <div v-for="n in 3" class="border-t border-#EBEBEB">
            <div class="wrapper flex flex-col lg:flex-row gap-4 lg:gap-10 py-6 lg:py-7.5">
                <p class="w-4ch text-#39919A text-xl lg:text-2xl font-Montserrat font-bold leading-1.2 lg:leading-1.2 mr-auto">2016</p>
                <div class="h-80.5 lg:max-w-125 flex-1 [&>img]:(w-full h-full object-cover object-center rounded-2xl)">
                    <img src="/imgs/about.png" alt="">
                </div>
                <div class="flex flex-col gap-4 lg:gap-5 lg:max-w-130.5 flex-[1.25] mt-1 lg:mt-0">
                    <h2 class="text-diamondBlack text-xl lg:text-2xl font-Montserrat font-bold leading-1.2 lg:leading-1.2">Маршрут года-2016</h2>
                    <p class="text-second text-sm lg:text-base leading-1.4 lg:leading-1.4">На нашем счету несколько высших наград Всероссийской туристской премии «Маршрут года» и Республиканского конкурса «Лидер туризма». Среди них – Гран-при в конкурсе «Маршруте года-2016» за интерактивную экскурсию
                        «Казань пятью органами
                        чувств» и 1 место в конкурсе «Маршруте года-2017» за гастрономическую экскурсию «Казан вкусов».</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-20 lg:mt-37.5 col-span-full grid-container overflow-hidden">
        <h2 class="text-diamondBlack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary">Наша команда <span>менеджеров</span></h2>
        <SplideTeams class="mt-7.5 lg:mt-10"></SplideTeams>
    </div>
    <div class="mt-20 col-span-full grid-container overflow-hidden">
        <h2 class="text-diamondBlack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary">Наша команда <span>экскурсоводов</span></h2>
        <SplideTeams class="mt-7.5 lg:mt-10"></SplideTeams>
    </div>
</template>

<script setup lang="ts">
const { data: pageInfo } = await useBaseFetch<any>(`search/page`, {
    key: 'about',
    query: { key: 'about' }
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>