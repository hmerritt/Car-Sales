import { sumBy, findIndex } from "lodash";

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

            //  Add new feature to list of features
            let features_add = [
                ...state.car.features,
                newFeature
            ];

            //  Check if feature has already been added
            if (findIndex(state.car.features, {id: newFeature.id}) > -1) {
                features_add = [
                    ...state.car.features
                ];
            }

            //  Calc new additionalPrice by adding all features
            const newAdditionalPrice_add = sumBy(features_add, "price");

            //  Add feature to features object
            return {
                ...state,
                additionalPrice: newAdditionalPrice_add,
                car: {
                    ...state.car,
                    features: features_add
                }
            }

        case "REMOVE_FEATURE":
            //  Feature id to remove
            const id = action.payload.id;

            //  Remove feature with the payload id
            const features_remove = state.car.features.filter((feature, key) => feature.id !== id);

            //  Calc new additionalPrice by adding all features
            const newAdditionalPrice_remove = sumBy(features_remove, "price");

            return {
                ...state,
                additionalPrice: newAdditionalPrice_remove,
                car: {
                    ...state.car,
                    features: features_remove
                }
            }

        default:
            return state;
    }
}
