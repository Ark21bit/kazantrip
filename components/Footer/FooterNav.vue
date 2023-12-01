<template>
    <div class="flex gap-10 items-center">
        <DropdownHover>
            <template #title>
                <CustomLink to="/test">Экскурсии</CustomLink>
            </template>
            <CustomLink class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors" to="/test">Индивидуальные</CustomLink>
            <CustomLink class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors" to="/test">Регулярные</CustomLink>
            <CustomLink class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors" to="/test">Еще какие-нибудь</CustomLink>
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