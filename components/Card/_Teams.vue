<template>
    <component :is="tag" class="rounded-5 overflow-hidden shadow-base">
        <div class="h-62.25 lg:h-70.25 [&>img]:(w-full h-full object-cover object-center)">
            <img src="/imgs/team.png" alt="">
        </div>
        <div class="rounded-t-5 -mt-5 lg:-mt-10 p-5 bg-white relative ring ring-inset ring-#F6F6F6">
            <p class="font-semibold text-lg lg:text-xl lg:leading-1.2 leading-1.2 text-diamondBlack">Ксения Алифанова</p>
            <p class="mt-3 lg:mt-1.5 text-sm text-#A8A8A8 leading-1.2">Генеральный директор</p>
            <div class="flex gap-1.75 items-center text-primary text-sm leading-1.4 mt-3">
                <Icon name="Mail" class="text-lg"></Icon> kazantrip@mail.ru
            </div>
            <p class="text-diamondBlack text-sm leading-1.4 mt-4">Наш Экскурсионный центр обеспечивал экскурсионное обслуживание участников и гостей XXVII Всемирной летней универсиады студентов 2013 в Казани</p>
            <CustomLink to="/test" class="flex mt-5 text-primary leading-1.2 text-base underline hover:text-#21747C transition-colors duration-500">Подробнее</CustomLink>
        </div>
    </component>
</template>

<script setup lang="ts">
defineProps({
    tag: { type: String, default: 'div' }
})
</script>