import React, {Component} from "react";
import {Image, TouchableOpacity} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import AgeInputContainer from "../components/AgeInput/AgeInputContainer";

class AgeInputScreen extends Component {

    render() {
        return (
            <BackgroundImage>
                <AgeInputContainer/>
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