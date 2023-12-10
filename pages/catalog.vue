<template>
    <h1 class="mt-10 lg:mt-20 text-6.5 lg:text-9.5 font-Montserrat leading-1.2 font-bold text-fblack">Экскурсии по Казани и Татарстану</h1>
    <SliderExcursionsCatalog class="py-5 lg:mt-2.5" />
    <div class="mt-2.5 col-span-full border-t lg:border-y border-#EBEBEB pt-7.5 lg:py-7.5">
        <CatalogContainer class="wrapper" :timetable="true">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-7.5 h-fit max-lg:(pb-7.5 border-b border-#EBEBEB)">
                <CardCatalog v-for="n in 12"></CardCatalog>
            </div>
        </CatalogContainer>
    </div>
    <div class="mt-20 lg:mt-25 pb-7.5 border-b border-#EBEBEB col-span-full">
        <SeoBlock class="wrapper"></SeoBlock>
    </div>
</template>

<script setup lang="ts">

</script>