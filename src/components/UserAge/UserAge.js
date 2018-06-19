import React, {Component} from "react";
import {KeyboardAvoidingView, Text, View, Platform} from "react-native";
import constants from "../../shared/constants";
import styles from "./userAgeStyleSheet";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from 'prop-types';
import buttonStyle from "../CustomButton/customButtonStleSheet";

class UserAge extends Component {
    state = {
        age: this.props.age,
    };


    render() {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
        return (
            <View style={styles.container}>
                <Text style={styles.question}>
                    {constants.QUESTION_AGE}
                </Text>
                <CustomInput
                    inputValue={this.state.age}
                    onChange={age => this.setState({age})}
                />

                <KeyboardAvoidingView style={buttonStyle.keyboardView} behavior="padding" enabled behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                    <CustomButton
                        label={constants.CONTINUE}
                        onPress={() => {
                            this.props.setAge(this.state.age);
                            this.props.navigation.push('HeightInput');
                        }}
                        disabled={!this.state.age}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

UserAge.propTypes = {
    age: PropTypes.string,
    setAge: PropTypes.func,
};

export default UserAge;