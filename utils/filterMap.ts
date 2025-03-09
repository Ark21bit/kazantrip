export const filterMap = <T>(list: T[] | undefined, filter: (value: MaybeRefOrGetter) => boolean, map: (value: any) => any) => {
    if (list === undefined) return 
    let Array:T[] = []
    for (let i = 0; i < toValue(list)?.length; i++) {
        if (filter(toValue(list)[i])) Array.push(map(toValue(list)[i]))
    }
    return Array
}