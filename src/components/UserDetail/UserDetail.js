import React, {Component} from "react";
import {View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userDetailStyleSheet";
import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton";
import CustomText from "../CustomText/CustomText";
import textStyle from "../CustomText/customTextStyleSheet";

class UserDetail extends Component {
    render() {
        const height = this.props.isHeightInCM ?
            `${this.props.heightInCM} ${constants.CM}` :
            `${this.props.heightInFT} ${constants.FT} ${this.props.heightInIN} ${constants.IN}`;
        return (
            <View style={styles.container}>
                <CustomText text={constants.QUESTION_CONFIRM} style={textStyle.question}/>

                <View style={styles.card}>
                    <View style={[styles.cardRow, styles.border]}>
                        <CustomText text={constants.GOAL} style={textStyle.cardTitle}/>
                        <CustomText text={this.props.selectedGoal.title} style={textStyle.cardValue}/>
                    </View>

                    <View style={[styles.cardRow, styles.border]}>
                        <CustomText text={constants.AGE} style={textStyle.cardTitle}/>
                        <CustomText text={this.props.age} style={textStyle.cardValue}
                        />
                    </View>

                    <View style={styles.cardRow}>
                        <CustomText text={constants.HEIGHT} style={textStyle.cardTitle}/>
                        <CustomText text={height} style={textStyle.cardValue}/>
                    </View>


                </View>

                <CustomButton
                    stye={{alignSelf: "flex-end"}}
                    label={constants.SAVE}
                    onPress={() => {
                    }}
                />
            </View>
        );
    }
}

UserDetail.propTypes = {
    selectedGoal: PropTypes.object.isRequired,
    age: PropTypes.string.isRequired,
    isHeightInCM: PropTypes.bool.isRequired,
    heightInCM: PropTypes.string.isRequired,
    heightInFT: PropTypes.string.isRequired,
    heightInIN: PropTypes.string.isRequired,
};

export default UserDetail;