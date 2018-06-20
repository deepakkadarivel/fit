import React from "react";
import {Image, ImageBackground} from "react-native";
import styles from "./backgroundStyleSheet";
import PropTypes from 'prop-types';

const Background = (props) => {
    return (
        <ImageBackground source={require("../../assets/backgroundGrain.png")} style={styles.container}>
            {props.isLandingScreen &&
            <Image style={styles.landingBeanImage} source={require("../../assets/imgBeans.png")}/>}
            {props.isLandingScreen &&
            <Image style={styles.landingMatImage} source={require("../../assets/imgMat.png")}/>}
            {props.isLandingScreen &&
            <Image style={styles.landingDumbbellImage} source={require("../../assets/imgDumbbell.png")}/>}

            {props.isConfirmationScreen &&
            <Image style={styles.confirmationParsleyImage} source={require("../../assets/imgParsley.png")}/>}
            {props.isConfirmationScreen &&
            <Image style={styles.confirmationBeanImage} source={require("../../assets/imgBeans.png")}/>}

            {props.children}
        </ImageBackground>
    );
};

Background.propTypes = {
    children: PropTypes.any,
    isLandingScreen: PropTypes.bool,
    isConfirmationScreen: PropTypes.bool,
};

Background.defaultProps = {
    isLandingScreen: false,
    isConfirmationScreen: false,
};

export default Background;
