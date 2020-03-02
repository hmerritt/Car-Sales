export const addFeature = (feature) => {
    return {
        type: "ADD_FEATURE",
        payload: {
            id: feature.id,
            name: feature.name,
            price: feature.price
        }
    }
}

export const removeFeature = (feature) => {
    return {
        type: "REMOVE_FEATURE",
        payload: {
            id: feature.id
        }
    }
}
