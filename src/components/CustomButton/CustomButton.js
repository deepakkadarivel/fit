import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./customButtonStleSheet";
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={props.isHeightComponent ? styles.buttonForHeightComponent : styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    label: PropTypes.string,
    isHeightComponent: PropTypes.bool,
    onPress: TouchableOpacity.propTypes.onPress,
};

CustomButton.defaultProps = {
    isHeightComponent: false
};

export default CustomButton;
