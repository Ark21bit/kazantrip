export const getPlacesStart = (placesStart: number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore());
    if (placesStart === undefined) return
    for (const item of generalConfig.value?.orders.places_start ?? []) {
        if (item.id == placesStart) return { title: item?.title, href: item?.map_href };
    }
};
