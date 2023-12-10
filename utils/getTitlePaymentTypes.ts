export default (paymentTypes: number | undefined) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    if (paymentTypes === undefined) return
    for (const item of generalConfig.value?.orders.payment_types ?? []) {
        if (item.id == paymentTypes) return item.title
    }
}