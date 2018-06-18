import React, {Component} from "react";
import {Image, TouchableOpacity} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import UserAgeContainer from "../components/UserAge/UserAgeContainer";

class AgeInputScreen extends Component {

    render() {
        return (
            <BackgroundImage>
                <UserAgeContainer navigation={this.props.navigation}/>
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