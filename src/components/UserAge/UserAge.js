import React, {Component} from "react";
import {View} from "react-native";
import constants from "../../shared/constants";
import styles from "./userAgeStyleSheet";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from 'prop-types';
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

class UserAge extends Component {
    state = {
        age: this.props.age,
    };


    render() {
        let isValidInput = this.state.age >= 13 && this.state.age <= 120;
        return (
            <View style={styles.container}>
                <CustomText text={constants.QUESTION_AGE} style={textStyle.question}/>
                <CustomInput inputValue={this.state.age} onChange={age => this.setState({age})}/>
                <CustomButton
                    label={constants.CONTINUE}
                    disabled={!isValidInput}
                    onPress={() => {
                        this.props.setAge(this.state.age);
                        this.props.navigation.push('HeightInput');
                    }}
                />
            </View>
        );
    }
}

UserAge.propTypes = {
    age: PropTypes.string,
    setAge: PropTypes.func,
};

export default UserAge;