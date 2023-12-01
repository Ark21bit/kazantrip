<template>
    <component :is="tag" class="flex flex-col gap-4 lg:gap-5 rounded-2xl overflow-hidden shadow-base ring-( 1 inset #F6F6F6) p-5 lg:p-6 min-h-100 lg:min-h-83.25 bg-[url(/imgs/reviewBg.svg)] bg-no-repeat bg-[position:bottom_0_right_30%]">
        <div class="flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div class="flex items-center gap-3 lg:gap-4">
                <Avatar size="sm" class="max-lg:w-13 max-lg:h-13"></Avatar>
                <div class="text-sm lg:text-base font-medium text-primary flex flex-col gap-3 lg:gap-2">
                    <p class="text-diamondBlack font-semibold text-base lg:text-lg leading-1.2 lg:leading-1.2">Иван Иванов</p>
                    <p>Древний город Болгар</p>
                </div>
            </div>
            <Rating></Rating>
        </div>
        <p class="text-diamondBlack text-sm lg:text-base leading-1.4 lg:leading-1.4 line-clamp-4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно) менеджеры все понятно объяснили, гид очень интересно рассказывал, побывали во всех
            местах
            исторического центра) и особенно
            понравился Казанский Кремль)Приедем еще раз, но уже летом) <Button @click="emit('open-full-review')" variant="link" padded class="!inline">Читать полностью</Button></p>
        <p class="mt-auto text-sm leading-1.4 text-#7B7B7B">21.12.2022</p>
    </component>
</template>

<script setup lang="ts">
defineProps({
    tag: { type: [String, Object], default: 'div' }
})
const emit = defineEmits(['open-full-review'])
</script>

