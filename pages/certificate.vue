<template>
    <div class="w-full h-100 lg:h-150 col-span-full">
        <img class="w-full h-full object-cover object-center" src="/imgs/certificate.png" alt="">
    </div>
    <div class="flex flex-col gap-7.5 mt-15">
        <Breadcrumbs class="max-lg:hidden"></Breadcrumbs>
        <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack">Подарочный сертификат на экскурсию</h1>
        <p class="text-base leading-1.4 text-second">Экскурсионный центр предлагает подарочный сертификат в качестве подарка вашим близким. Сертификат можно получить в электронном варианте или в бумажном виде. Электронный вариант формируется при онлайн-оплате и отправляется на электронную почту.
            Бумажный вид вы можете заказать в наших офисах -Пушкина, 4 или Московская, 2. ВАЖНО ЗНАТЬ! - Срок действия сертификата – 1 год. - Получатель сертификата вправе приобрести неограниченное количество билетов на любые экскурсионные услуги Экскурсионного центра г. Казани по актуальной на период
            запроса стоимости услуг, опубликованных на сайте kazantrip.ru, в рамках денежного номинала сертификата. - Если стоимость выбранных экскурсионных услуг превышает номинал сертификата, получатель вправе внести доплату к общему заказу.</p>
        <ModalCertificate #="{ openModal }">
            <Button @click="openModal" class="w-full lg:w-76.25">Заказать сертификат</Button>
        </ModalCertificate>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useBaseFetch<any>('search/page', {
    query: { key: 'certificate' }
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>