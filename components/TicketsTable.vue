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
        <template v-if="tickets?.length > 0">
            <TableTr class="max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto] max-lg:gap-2" v-for="ticket in tickets">
                <FormKit type="group">
                    <TableTd :data-label="generalConfig?.static_info?.global_words?.type_ticket">
                        {{ getTitleTypeTicket(ticket?.type_ticket_id) }}
                        <FormKit type="meta" :value="ticket?.type_ticket_id" name="id"></FormKit>
                    </TableTd>
                    <TableTd :data-label="generalConfig?.static_info?.global_words?.price" class="items-end !justify-start">
                        {{ ticket.price }} ₽ <span v-if="oldPrice && oldPrice > ticket.price" class="text-xs leading-1.2 decoration-line-through text-#A4A4A4">{{ oldPrice }} ₽</span>
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
                <span class="text-base lg:text-lg text-fblack leading-tight lg:leading-tight text-center m-auto" v-else>{{ generalConfig?.static_info?.global_words?.select_date_and_time }}</span>
            </TableTd>
        </TableTr>
    </Table>
</template>
<script setup>
defineProps({
    tickets: Array,
    loading: { type: Boolean, default: false },
	oldPrice:Number
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>