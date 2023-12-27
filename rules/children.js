const children = (node) => {
    const array = [10, 30, 40, 41]
    return node.value.some(a => a.count > 0 && array.includes(a.id))
}

export default children