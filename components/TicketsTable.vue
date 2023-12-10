<template>
    <Table class="lg:grid-cols-[1fr_repeat(2,minmax(auto,140px))]">
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
        <TableTr class="max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-2" v-for="ticket in tickets">
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
    </Table>
</template>
<script setup>
defineProps({
    tickets: Array
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>