import React, {Component} from "react";
import {Text, View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userHeightStyleSheet";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from 'prop-types';
import CustomSegmentContainer from "../CustomSegment/CustomSegmentContainer";

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
                <View style={styles.inputView}>
                    <CustomInput
                        inputValue={this.state.heightInCM}
                        onChange={heightInCM => this.setState({heightInCM})}
                        isHeightScreen={true}
                    />
                    <Text style={styles.inputHint}>
                        {constants.CM}
                    </Text>
                </View>
                <CustomSegmentContainer/>
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