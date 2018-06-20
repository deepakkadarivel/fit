import React, {Component} from "react";
import {View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userHeightStyleSheet";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from 'prop-types';
import CustomSegmentContainer from "../CustomSegment/CustomSegmentContainer";
import InputHeightInCM from "../InputHeightInCM/InputHeightInCM";
import InputHeightInFT from "../InputHeightInFT/InputHeightInFT";
import CustomText from "../CustomText/CustomText";
import textStyle from "../CustomText/customTextStyleSheet";

class UserHeight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heightInCM: this.props.heightInCM,
            heightInFT: this.props.heightInFT,
            heightInIN: this.props.heightInIN,
            isValidInput: this.validateInput.bind(this),
        };
        this.validateInput = this.validateInput.bind(this);
        this.renderInputForCM = this.renderInputForCM.bind(this);
        this.renderInputForFT = this.renderInputForFT.bind(this);
        this.storeHeight = this.storeHeight.bind(this);
    }

    validateInput() {
        if (this.props.isHeightInCM) {
            const heightInCM = this.state.heightInCM;
            return heightInCM >= 125 && heightInCM <= 301;
        } else {
            const heightInFT = this.state.heightInFT;
            const heightInIN = this.state.heightInIN;
            return (heightInFT >= 4 && heightInFT <= 10) && (heightInIN >= 1 && heightInIN <= 12)
        }
    };

    renderInputForCM() {
        return (
            <InputHeightInCM
                inputValue={this.state.heightInCM}
                onChange={heightInCM => this.setState({heightInCM}, () => this.setState({isValidInput: this.validateInput()}))}
            />
        );
    };

    renderInputForFT() {
        return (
            <InputHeightInFT
                heightInFT={this.state.heightInFT}
                heightInIN={this.state.heightInIN}
                onChangeFT={heightInFT => this.setState({heightInFT}, () => this.setState({isValidInput: this.validateInput()}))}
                onChangeIN={heightInIN => this.setState({heightInIN}, () => this.setState({isValidInput: this.validateInput()}))}
            />
        );
    };

    storeHeight() {
        this.props.setHeight(
            this.state.heightInCM,
            this.state.heightInFT,
            this.state.heightInIN
        );
        this.props.navigation.push('Confirmation');
    };


    render() {
        return (
            <View style={styles.container}>
                <CustomText text={constants.QUESTION_HEIGHT} style={textStyle.question}/>
                {this.props.isHeightInCM && this.renderInputForCM()}
                {!this.props.isHeightInCM && this.renderInputForFT()}
                <CustomSegmentContainer/>
                <CustomButton
                    label={constants.CONTINUE}
                    disabled={!this.state.isValidInput}
                    onPress={() => this.storeHeight()}
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
    setHeight: PropTypes.func,
};

export default UserHeight;