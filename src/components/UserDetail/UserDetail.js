import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userDetailStyleSheet";
import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton";

class UserDetail extends Component {
    render() {
        const height = this.props.isHeightInCM ?
            `${this.props.heightInCM}${constants.CM}` :
            `${this.props.heightInFT}${constants.FT} ${this.props.heightInIN}${constants.IN}`;
        return (
            <View style={styles.container}>

                <Image
                    style={{position: 'absolute', top: 0, right: 0}}
                    source={require("../../assets/imgParsley.png")}
                />
                <Image
                    style={{position: 'absolute', bottom: -150, left: 0}}
                    source={require("../../assets/imgBeans.png")}
                />

                <Text style={styles.question}>
                    {constants.QUESTION_CONFIRM}
                </Text>

                <View style={styles.card}>
                    <View style={[styles.cardRow, styles.border]}>
                        <Text style={styles.title}>
                            {constants.GOAL}
                        </Text>
                        <Text style={styles.value}>
                            {this.props.selectedGoal.title}
                        </Text>
                    </View>
                    <View style={[styles.cardRow, styles.border]}>
                        <Text style={styles.title}>
                            {constants.AGE}
                        </Text>
                        <Text style={styles.value}>
                            {this.props.age}
                        </Text>
                    </View>
                    <View style={styles.cardRow}>
                        <Text style={styles.title}>
                            {constants.HEIGHT}
                        </Text>
                        <Text style={styles.value}>
                            {height}
                        </Text>
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