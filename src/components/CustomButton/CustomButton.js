import React from "react";
import {KeyboardAvoidingView, Platform, Text, TouchableOpacity} from "react-native";
import styles from "./customButtonStleSheet";
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
    return (
        <KeyboardAvoidingView style={styles.keyboardView} behavior="padding" enabled
                              keyboardVerticalOffset={keyboardVerticalOffset}>
            <TouchableOpacity
                style={[
                    styles.button,
                    props.disabled ? styles.buttonDisabled : styles.buttonActive,
                ]}
                onPress={props.onPress}
                disabled={props.disabled}
            >
                <Text style={styles.buttonText}>
                    {props.label}
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

CustomButton.propTypes = {
    label: PropTypes.string,
    onPress: TouchableOpacity.propTypes.onPress,
};

CustomButton.defaultProps = {
    disabled: false,
};

export default CustomButton;
