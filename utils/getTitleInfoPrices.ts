export const getTitleInfoPrices = (InfoPrices:number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    if (InfoPrices === undefined) return
    for (const item of generalConfig.value?.orders.price_types ?? []) {
        if (item.id == InfoPrices) return item?.title;
    }
};
