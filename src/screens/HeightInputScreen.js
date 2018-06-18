import React, {Component} from "react";
import {Image, TouchableOpacity} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import UserHeightContainer from "../components/UserHeight/UserHeightContainer";

class HeightInputScreen extends Component {

    render() {
        return (
            <BackgroundImage>
                <UserHeightContainer/>
            </BackgroundImage>
        );
    }
}

HeightInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>
});

export default HeightInputScreen;