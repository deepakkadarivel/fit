import React from "react";
import { ImageBackground, Text } from "react-native";
import styles from "../../styles/commonStyleSheet";
import PropTypes from 'prop-types';

const BackgroundImage = (props) => {
    return (
        <ImageBackground
            source={require("../../assets/backgroundGrain.png")}
            style={styles.container}
        >
            {props.children}
        </ImageBackground>
    );
};

BackgroundImage.propTypes = {
    children: PropTypes.any
};

export default BackgroundImage;
