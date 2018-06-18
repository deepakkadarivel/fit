import React, {Component} from "react";
import {Text, View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userHeightStyleSheet";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from 'prop-types';

class UserHeight extends Component {
    state = {
        heightInCM: this.props.heightInCM,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>
                    {constants.QUESTION_HEIGHT}
                </Text>
                <CustomInput
                    inputValue={this.state.heightInCM}
                    onChange={heightInCM => this.setState({heightInCM})}
                />
                <CustomButton
                    label={constants.CONTINUE}
                    onPress={() => this.props.setHeightInCM(this.state.heightInCM)}
                />
            </View>
        );
    }
}

UserHeight.propTypes = {
    heightInCM: PropTypes.string,
    setHeightInCM: PropTypes.func,
};

export default UserHeight;