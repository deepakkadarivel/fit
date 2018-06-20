import React from "react";
import {Text, TextInput, View} from "react-native";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";
import styles from "../CustomInput/customInputStyleSheet";
import CustomInput from "../CustomInput/CustomInput";

const InputHeightInFT = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputFTView}>
                <CustomInput
                    inputValue={props.heightInFT}
                    onChange={heightInFT => props.onChangeFT(heightInFT)}
                    extraStyle={styles.inputWithNoBorder}
                />
                <Text style={styles.inputSuffix}>
                    {constants.FT}
                </Text>
            </View>
            <View style={styles.inputFTView}>
                <CustomInput
                    inputValue={props.heightInIN}
                    onChange={heightInIN => props.onChangeIN(heightInIN)}
                    extraStyle={styles.inputWithNoBorder}
                />
                <Text style={styles.inputSuffix}>
                    {constants.IN}
                </Text>
            </View>
        </View>
    );
};

InputHeightInFT.propTypes = {
    heightInFT: PropTypes.string,
    heightInIN: PropTypes.string,
    onChangeFT: TextInput.propTypes.onChangeText,
    onChangeIN: TextInput.propTypes.onChangeText,
};

export default InputHeightInFT;
