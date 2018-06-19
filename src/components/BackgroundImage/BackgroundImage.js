import React from "react";
import {ImageBackground, Text} from "react-native";
import styles from "../../styles/commonStyleSheet";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";

const BackgroundImage = (props) => {
    let source = '';
    switch (props.sourceType) {
        case constants.BackgroundSourceTypes.PARSLEY:
            source = require("../../assets/imgParsley.png");
            break;
        case constants.BackgroundSourceTypes.BEANS:
            source = require("../../assets/imgBeans.png");
            break;
        default:
            source = require("../../assets/backgroundGrain.png");
            break;
    }

    return (
        <ImageBackground
            source={source}
            style={styles.container}
        >
            {props.children}
        </ImageBackground>
    );
};

BackgroundImage.propTypes = {
    children: PropTypes.any,
    sourceType: PropTypes.string,
};

export default BackgroundImage;
