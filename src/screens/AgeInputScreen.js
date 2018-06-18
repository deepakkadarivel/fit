import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import constants from "../shared/constants";
import styles from "../styles/ageInputStyleSheet";
import UserTextInput from "../components/UserInput/UserInput";
import CustomButton from "../components/CustomButton/CustomButton";

class AgeInputScreen extends Component {
    state = {
        age: '',
    };

    _submitForm = () => {
        const {age} = this.state
    };

    render() {
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <Text style={styles.question}>
                        {constants.QUESTION_AGE}
                    </Text>
                    <UserTextInput
                        value={this.state.age}
                        onChange={age => this.setState({age})}
                    />
                    <CustomButton
                        label={constants.CONTINUE}
                        onPress={() => this._submitForm}
                    ></CustomButton>
                </View>
            </BackgroundImage>
        );
    }
}

AgeInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>
});

export default AgeInputScreen;