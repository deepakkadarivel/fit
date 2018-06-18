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
        heightInFT: this.props.heightInFT,
        heightInIN: this.props.heightInIN,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>
                    {constants.QUESTION_HEIGHT}
                </Text>
                {this.props.isHeightInCM && <View style={styles.inputView}>
                    <CustomInput
                        inputValue={this.state.heightInCM}
                        onChange={heightInCM => this.setState({heightInCM})}
                        isHeightScreen={true}
                    />
                    <Text style={styles.inputHint}>
                        {constants.CM}
                    </Text>
                </View>}
                {!this.props.isHeightInCM &&
                <View style={styles.inputView}>
                    <View style={styles.inputFTView}>
                        <CustomInput
                            inputValue={this.state.heightInFT}
                            onChange={heightInFT => this.setState({heightInFT})}
                            isHeightScreen={true}
                        />
                        <Text style={styles.inputHint}>
                            {constants.FT}
                        </Text>
                    </View>
                    <View style={styles.inputFTView}>
                        <CustomInput
                            inputValue={this.state.heightInIN}
                            onChange={heightInIN => this.setState({heightInIN})}
                            isHeightScreen={true}
                        />
                        <Text style={styles.inputHint}>
                            {constants.IN}
                        </Text>
                    </View>
                </View>
                }
                <CustomSegmentContainer/>
                <CustomButton
                    label={constants.CONTINUE}
                    onPress={() => {
                        this.props.setHeightInCM(this.state.heightInCM);
                        this.props.setHeightInFT(this.state.heightInFT);
                        this.props.setHeightInIN(this.state.heightInIN);
                    }}
                    isHeightComponent={true}
                />
            </View>
        );
    }
}

UserHeight.propTypes = {
    heightInCM: PropTypes.string,
    heightInFT: PropTypes.string,
    heightInIN: PropTypes.string,
    isHeightInCM: PropTypes.bool.isRequired,
    setHeightInCM: PropTypes.func,
    setHeightInFT: PropTypes.func,
    setHeightInIN: PropTypes.func,
};

export default UserHeight;