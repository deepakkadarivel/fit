import React from "react";
import {TextInput, View} from "react-native";
import styles from "./customInputStyleSheet";
import PropTypes from 'prop-types';

const CustomTextInput = (props) => {
    return (
        <TextInput
            autoFocus={true}
            keyboardType={'numeric'}
            numberOfLines={1}
            editable={true}
            maxLength={3}
            style={props.isHeightScreen ? styles.inputWithNoBorder : styles.input}
            value={props.inputValue}
            onChangeText={age => props.onChange(age)}
        />
    );
};

CustomTextInput.propTypes = {
    inputValue: PropTypes.string,
    onChange: TextInput.propTypes.onChangeText,
    isHeightScreen: PropTypes.bool
};

CustomTextInput.defaultProps = {
    isHeightScreen: false
};

export default CustomTextInput;
