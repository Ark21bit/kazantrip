<template>
    <Table class="lg:grid-cols-[1fr_repeat(2,auto)]">
        <template #head>
            <TableTr>
                <TableTh>
                    {{ generalConfig?.static_info?.global_words?.type_ticket }}
                </TableTh>
                <TableTh>
                    {{ generalConfig?.static_info?.global_words?.price }}
                </TableTh>
                <TableTh class="justify-end">
                    {{ generalConfig?.static_info?.global_words?.count }}
                </TableTh>
            </TableTr>
        </template>
        <template v-if="tickets?.length > 0">
            <TableTr class="max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto] max-lg:gap-2" v-for="ticket in tickets">
                <FormKit type="group">
                    <TableTd :data-label="generalConfig?.static_info?.global_words?.type_ticket">
                        {{ getTitleTypeTicket(ticket?.type_ticket_id) }}
                        <FormKit type="meta" :value="ticket?.type_ticket_id" name="id"></FormKit>
                    </TableTd>
                    <TableTd :data-label="generalConfig?.static_info?.global_words?.price">
                        {{ ticket.price }} ₽
                        <FormKit type="meta" :value="ticket?.price" name="price"></FormKit>
                    </TableTd>
                    <TableTd :data-label="generalConfig?.static_info?.global_words?.count" class="justify-end max-lg:col-[2] max-lg:row-span-full max-lg:ml-auto">
                        <FormKit type="counter" number name="count"></FormKit>
                    </TableTd>
                </FormKit>
            </TableTr>
        </template>
        <TableTr class="max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto] max-lg:gap-2" v-else>
            <TableTd class="min-h-54 col-span-full">
                <span v-if="loading" class="text-5xl text-primary m-auto i-eos-icons:loading"></span>
                <span class="text-base lg:text-lg text-fblack leading-tight lg:leading-tight text-center m-auto" v-else>Выберите дату и время</span>
            </TableTd>
        </TableTr>
    </Table>
</template>
<script setup>
defineProps({
    tickets: Array,
    loading: { type: Boolean, default: false }
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>