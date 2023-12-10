export const getTitlePlacesStart = (placesStart: number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore());
    if (placesStart === undefined) return
    for (const item of generalConfig.value?.orders.places_start ?? []) {
        if (item.id == placesStart) return item?.title;
    }
};
