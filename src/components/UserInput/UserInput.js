import React from "react";
import { TextInput } from "react-native";
import styles from "./userInputStyleSheet";
import PropTypes from 'prop-types';

const UserTextInput = (props) => {
    return (
        <TextInput
            autoFocus={true}
            keyboardType={'numeric'}
            numberOfLines={1}
            editable={true}
            maxLength={3}
            style={styles.input}
            value={props.value}
            onChangeText={age => props.onChange({age})}
        />
    );
};

UserTextInput.propTypes = {
    value: PropTypes.string,
    onChange: TextInput.propTypes.onChangeText
};

export default UserTextInput;
