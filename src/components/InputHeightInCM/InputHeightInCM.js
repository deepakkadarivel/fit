import React from "react";
import {TextInput, View} from "react-native";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";
import styles from "../CustomInput/customInputStyleSheet";
import CustomInput from "../CustomInput/CustomInput";
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

const InputHeightInCM = (props) => {
    return (
        <View style={styles.container}>
            <CustomInput
                inputValue={props.inputValue}
                onChange={age => props.onChange(age)}
                extraStyle={styles.inputWithNoBorder}
            />
            <CustomText
                text={constants.CM}
                style={textStyle.inputSuffix}
            />
        </View>
    );
};

InputHeightInCM.propTypes = {
    inputValue: PropTypes.string,
    onChange: TextInput.propTypes.onChangeText,
};

export default InputHeightInCM;
