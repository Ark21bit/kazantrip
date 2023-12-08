<template>
    <div class="max-w-211.5 mx-auto">
        <h1 class="text-6.5 lg:text-9.5 font-bold font-Montserrat text-diamondBlack text-center leading-1.2 lg:leading-1.2">Подтвердите бронирование</h1>
        <div class="mt-7.5 lg:mt-10 shadow-base rounded-5 ring ring-#F6F6F6 ring-inset lg:py-2.5">
            <div class="flex flex-col gap-4 items-center text-center px-5 pt-5 lg:pt-7.5 pb-7.5 border-b border-#E8E8E8">
                <h2 class="text-5.5 lg:text-6.5 text-diamondBlack leading-1.2 font-bold">Уважаемый(ая) <span class="text-primary">Иван Иванов</span></h2>
                <p class="text-sm lg:text-base text-second leading-1.35 lg:leading-1.35"> Благодарим Вас за бронирование экскурсии в Экскурсионном центре г.Казани! Просим проверить правильность введенных данных и подтвердить заказ</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Название экскурсии</p>
                <p class="font-medium">Остров-град Свияжск, Иннополис и Храм всех религий (с посещением)</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Дата экскурсии</p>
                <p class="font-medium">16.03.2023</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Время начала</p>
                <p class="font-medium">19:00</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Место начала экскурсии</p>
                <p class="font-medium">Московская, 2 (ТД ЦУМ)</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>ФИО Туриста</p>
                <p class="font-medium">Иванов Ивано Иванович</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Телефон туриста</p>
                <p class="font-medium">+7(183) 132-23-13</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Взрослые</p>
                <p class="font-medium">1 (1999₽)</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Промокод</p>
                <p class="font-medium">-</p>
            </div>
            <div class="flex flex-col justify-between gap-3 py-3 lg:py-5 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Примечание</p>
                <p class="font-medium">Лучший способ узнать о главных достопримечательностях Казани - прогулка с местным жителем. А если он еще и является аккредитованным экскурсоводом, который сдал строгий экзамен на знание достопримечательностей и истории Казани и Республики Татарстан, такие прогулки
                    превратятся в увлекательные экскурсии по Казани или даже многодневные туры.</p>
            </div>
            <div class="flex bg-primary lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-lg leading-1.2 text-white font-semibold">
                <p>Итого</p>
                <p>3999₽</p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-3 pt-3 pb-5 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-diamondBlack">
                <p>Вид оплаты</p>
                <p class="font-medium">Наличные/картой перед экскурсией</p>
            </div>        
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-5 mt-7.5">
            <Button class="!px-6.5">Да, все верно, заказ подтверждаю</Button>
            <Button class="lg:w-49" variant="outline" color="green">Отменить</Button>        
        </div>
    </div>
    <div class="col-span-full max-lg:hidden -mb-65 -z-1">
        <img src="/eventImg.png" alt="">
    </div>
</template>

<script setup lang="ts">

</script>