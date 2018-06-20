import React from "react";
import {Text, TextInput, View} from "react-native";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";
import styles from "../CustomInput/customInputStyleSheet";
import CustomInput from "../CustomInput/CustomInput";

const InputHeightInCM = (props) => {
    return (
        <View style={styles.container}>
            <CustomInput
                inputValue={props.inputValue}
                onChange={age => props.onChange(age)}
                extraStyle={styles.inputWithNoBorder}
            />
            <Text style={styles.inputSuffix}>
                {constants.CM}
            </Text>
        </View>
    );
};

InputHeightInCM.propTypes = {
    inputValue: PropTypes.string,
    onChange: TextInput.propTypes.onChangeText,
};

export default InputHeightInCM;
