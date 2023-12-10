export const getTitleTypeTicket = (typeTicket:number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore());
    if (typeTicket === undefined) return
    for (const item of generalConfig.value?.orders?.ticket_types ?? []) {
        if (item.id == typeTicket) return item?.title;
    }
};
