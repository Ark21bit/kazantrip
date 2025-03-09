const counterGMax = (node, group) => {
    let S = 0
    for (let i = 0; i < node.value.length; i++) {
        S += node.value[i].count        
    }
    return S <= group
}

export default counterGMax