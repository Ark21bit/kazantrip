<template>
    <div class="flex flex-col gap-4 py-5 px-3.75 bg-white w-full absolute top-full left-0 col-span-full">
        <div class="flex flex-col">
            <p class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-#C7C7C7 text-3.75 leading-1.25">Меню</p>
            <Dropdown class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB">
                <template #dropdown-header-content>
                    <CustomLink to="/test">Экскурсии</CustomLink>
                </template>
                <CustomLink class="text-diamondBlack text-3.75 leading-1.25" to="/test">Экскурсии</CustomLink>
                <CustomLink class="text-diamondBlack text-3.75 leading-1.25" to="/test">Экскурсии</CustomLink>
                <CustomLink class="text-diamondBlack text-3.75 leading-1.25" to="/test">Экскурсии</CustomLink>
            </Dropdown>
            <CustomLink class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-diamondBlack text-3.75 leading-1.25" to="/test">Отзывы</CustomLink>
            <CustomLink class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-diamondBlack text-3.75 leading-1.25" to="/test">О нас</CustomLink>
            <CustomLink class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-diamondBlack text-3.75 leading-1.25" to="/test">Наши акции</CustomLink>
            <CustomLink class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-diamondBlack text-3.75 leading-1.25" to="/test">FAQ</CustomLink>
        </div>
        <div class="flex gap-3 mt-auto">
            <CustomLink class="text-xl text-diamondBlack" to="/test">
                <Icon name="Tg" />
            </CustomLink>
            <CustomLink class="text-xl text-diamondBlack" to="/test">
                <Icon name="Tg" />
            </CustomLink>
            <CustomLink class="text-xl text-diamondBlack" to="/test">
                <Icon name="Tg" />
            </CustomLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>