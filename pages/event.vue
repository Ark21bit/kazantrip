<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">Наши специальные предложения</h1>
    <div class="flex flex-col gap-5 mt-7.5 lg:mt-10">
        <div v-for="n in 3" class="flex flex-col gap-4 lg:gap-5 border shadow-base border-#F6F6F6 p-5 lg:pt-6 lg:p-8 lg:pr-27 rounded-5 lg:bg-[url(/imgs/pattern.svg)] bg-repeat-y bg-[position:top_0_right_40px]">
            <h2 class="text-fblack font-semibold text-lg lg:text-2xl leading-1.2 lg:leading-1.2"><span class="text-primary">Скидка 15%</span> на все экскурсии до 31 декабря 2023 г</h2>
            <p class="text-sm lg:text-base leading-1.4 lg:leading-1.4 text-second max-w-225">Экскурсионный центр предлагает подарочный сертификат в качестве подарка вашим близким. Сертификат можно получить в электронном варианте или в бумажном виде. </p>
            <Button class="w-full lg:w-41.25 mt-2 lg:mt-1">Заказать</Button>
        </div>
    </div>
    <div class="col-span-full max-lg:hidden -mb-65 -z-1">
        <img src="/eventImg.png" alt="">
    </div>
</template>

<script setup lang="ts">

</script>