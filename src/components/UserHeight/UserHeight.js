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
    state = {
        heightInCM: this.props.heightInCM,
        heightInFT: this.props.heightInFT,
        heightInIN: this.props.heightInIN,
    };

    render() {
        const setHeight = () => {
            this.props.setHeight(
                this.state.heightInCM,
                this.state.heightInFT,
                this.state.heightInIN
            );
            this.props.navigation.push('Confirmation');
        };

        return (
            <View style={styles.container}>
                <CustomText text={constants.QUESTION_HEIGHT} style={textStyle.question}/>
                {this.props.isHeightInCM && <InputHeightInCM
                    inputValue={this.state.heightInCM}
                    onChange={heightInCM => this.setState({heightInCM})}
                />}
                {!this.props.isHeightInCM && <InputHeightInFT
                    heightInFT={this.state.heightInFT}
                    heightInIN={this.state.heightInIN}
                    onChangeFT={heightInFT => this.setState({heightInFT})}
                    onChangeIN={heightInIN => this.setState({heightInIN})}
                />}
                <CustomSegmentContainer/>
                <CustomButton
                    label={constants.CONTINUE}
                    disabled={this.props.isHeightInCM ? !this.state.heightInCM : !(this.state.heightInFT && this.state.heightInIN)}
                    onPress={() => setHeight()}
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