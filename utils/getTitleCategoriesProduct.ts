export const getTitleCategoriesProduct = (productCategories: number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    if (productCategories === undefined) return
    for (const item of generalConfig.value?.products?.categories ?? []) {
        if (item.id == productCategories) return item?.title
    }
};
