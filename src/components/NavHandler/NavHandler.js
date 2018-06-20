import React from "react";
import {Image, TouchableOpacity} from "react-native";
import styles from "./navHandlerStyleSheet";
import PropTypes from 'prop-types';

const NavHandler = (props) => {
    return (
        <TouchableOpacity
            style={props.isConfirmationScreen ? styles.navLeft : {}}
            onPress={() => props.navigation.goBack()}>
            <Image source={require('../../assets/icArrowLeft.png')}/>
        </TouchableOpacity>
    );
};

NavHandler.propTypes = {
    navigation: PropTypes.any,
    isConfirmationScreen: PropTypes.bool,
};

NavHandler.defaultProps = {
    isConfirmationScreen: false,
};

export default NavHandler;
