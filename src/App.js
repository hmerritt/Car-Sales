import React from "react";
import { connect } from "react-redux";

import { addFeature, removeFeature } from "./actions/carActions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {

    const removeItem = item => {
        props.removeFeature(item);
    };

    const buyItem = item => {
        props.addFeature(item);
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} />
                <AddedFeatures
                    car={props.car}
                    removeItem={removeItem}
                />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={props.additionalFeatures}
                    buyItem={buyItem}
                />
                <Total
                    car={props.car}
                    additionalPrice={props.additionalPrice}
                />
            </div>
        </div>
    );
};

export default connect(
    state => {
        return {
            car: state.car,
            features: state.car.features,
            additionalFeatures: state.additionalFeatures,
            additionalPrice: state.additionalPrice
        }
    },
    { addFeature, removeFeature }
)(App);
