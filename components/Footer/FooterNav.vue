<template>
    <div class="flex gap-10 items-center">
        <DropdownHover dark>
            <template #title>
                <CustomLink to="/test">Экскурсии</CustomLink>
            </template>
            <template #default="{ classes }">
                <CustomLink class="w-46" :class="classes" to="/test">Индивидуальные</CustomLink>
                <CustomLink class="w-46" :class="classes" to="/test">Регулярные</CustomLink>
                <CustomLink class="w-46" :class="classes" to="/test">Еще какие-нибудь</CustomLink>
            </template>
        </DropdownHover>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">Отзывы</CustomLink>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">О нас</CustomLink>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">Наши акции</CustomLink>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">Панорама</CustomLink>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">FAQ</CustomLink>
        <CustomLink to="/test" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">Блог</CustomLink>
    </div>
</template>

<script setup lang="ts">

</script>