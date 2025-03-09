export const phoneLinkReplace = (phone: string | undefined) => {
    if (phone === undefined) return undefined
    return `tel:${phone?.replace(/\s/g, '') ?? ''}`
};
