import React from "react";
import {KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import styles from "./customButtonStleSheet";
import PropTypes from 'prop-types';
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

const CustomButton = (props) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : -160;
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

                <CustomText
                    text={props.label}
                    style={textStyle.buttonTextWhite}
                />
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
