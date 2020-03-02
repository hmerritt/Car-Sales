export const initalState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: []
    },
    additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 }
    ]
};

export const carReducer = (state=initalState, action) => {
    switch(action.type) {
        case "ADD_FEATURE":
            //  Populate feature object from payload
            const newFeature = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            }

            //  Remove add features with the payload id
            const features = [
                ...state.car.features,
                newFeature
            ]

            //  Calc new additionalPrice by adding all features
            const newAdditionalPrice = features.reduce(total, feature) => total + feature.price;

            //  Add feature to features object
            return {
                ...state,
                additionalPrice: newAdditionalPrice,
                car: {
                    features: features
                }
            }

        case "REMOVE_FEATURE":
            //  Feature id to remove
            const id = action.payload.id;

            //  Remove add features with the payload id
            const features = state.car.features.filter((feature, key) => feature.id !== id);

            //  Calc new additionalPrice by adding all features
            const newAdditionalPrice = features.reduce(total, feature) => total + feature.price;

            return {
                ...state,
                additionalPrice: newAdditionalPrice,
                car: {
                    features: features
                }
            }

        default:
            return state;
    }
}
