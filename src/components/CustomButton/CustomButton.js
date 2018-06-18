import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./customButtonStleSheet";
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => props.onPress}
        >
            <Text style={styles.buttonText}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    label: PropTypes.string,
    onPress: TouchableOpacity.propTypes.onPress,
};

export default CustomButton;
