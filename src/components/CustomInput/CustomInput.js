import React from "react";
import {TextInput} from "react-native";
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
            style={[styles.input, props.extraStyle]}
            value={props.inputValue}
            onChangeText={age => props.onChange(age)}
            underlineColorAndroid={'transparent'}
        />
    );
};

CustomTextInput.propTypes = {
    inputValue: PropTypes.string,
    onChange: TextInput.propTypes.onChangeText,
    extraStyle: PropTypes.any,
};

export default CustomTextInput;
