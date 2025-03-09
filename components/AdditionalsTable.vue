<template>
    <Table class="lg:grid-cols-[1fr_repeat(2,auto)]">
        <template #head>
            <TableTr>
                <TableTh class="rounded-lt-4">
                    {{ generalConfig?.static_info?.global_words?.type_ticket }}
                </TableTh>
                <TableTh>
                    {{ generalConfig?.static_info?.global_words?.price }}
                </TableTh>
                <TableTh class="justify-end rounded-rt-4">
                    {{ generalConfig?.static_info?.global_words?.count }}
                </TableTh>
            </TableTr>
        </template>
        <TableTr class="max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto] max-lg:gap-2" v-for="ticket in tickets">
            <FormKit type="group">
                <TableTd :data-label="generalConfig?.static_info?.global_words?.type_ticket">
                    <p>{{ ticket?.addition_info?.lang_info?.title }}</p>
                    <FormKit type="meta" :value="ticket?.addition_info?.id" name="id"></FormKit>
                    <FormKit type="meta" :value="ticket?.addition_info?.lang_info?.title" name="title"></FormKit>
					<Tooltip v-if="ticket?.addition_info?.lang_info?.description" class="mr-auto" :title="ticket?.addition_info?.lang_info?.description"/>
                </TableTd>
                <TableTd :data-label="generalConfig?.static_info?.global_words?.price">
                    <FormKit type="meta" :value="ticket?.price" name="price"></FormKit>
                    {{ ticket?.price }} ₽
                </TableTd>
                <TableTd :data-label="generalConfig?.static_info?.global_words?.count" class="max-lg:justify-end max-lg:col-[2] max-lg:row-span-full max-lg:ml-auto">
                    <FormKit type="counter" name="count"></FormKit>
                </TableTd>
            </FormKit>
        </TableTr>
    </Table>
</template>
<script lang="ts" setup>
import type { InfoAdditionalProductsDatum } from '~/types/fetch/shared';

defineProps({
    tickets: Array as PropType<InfoAdditionalProductsDatum[]>
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>