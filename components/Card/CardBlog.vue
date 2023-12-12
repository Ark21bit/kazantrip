<template>
    <div class="flex flex-col rounded-5 overflow-hidden shadow-base">
        <div class="relative h-50 lg:h-62.5 [&>img]:(w-full h-full object-cover object-center)" v-html="img"></div>
        <div class="grow rounded-t-5 -mt-5 lg:-mt-9 flex flex-col gap-5 bg-white relative ring ring-inset ring-#F6F6F6">
            <div class="flex flex-col gap-4 grow p-5 ">
                <p class="text-base lg:text-lg text-fblack font-semibold leading-1.2 lg:leading-1.2 grow line-clamp-3">{{ title }}</p>
                <p class="max-lg:hidden text-sm text-second leading-1.4 h-5.6em line-clamp-4">{{ description }}</p>
            </div>
            <div class="p-5 border-t border-#EBEBEB">
                <Button :tag="CustomLink" :to="slug" class="max-lg:text-sm max-lg:leading-1.25">
                    {{ generalConfig?.static_info?.global_words?.more }}
                </Button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { CustomLink } from '#components';

defineProps({
    title: String,
    description: String,
    slug: String,
    img: String,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>