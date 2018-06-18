import React from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

export default AgeInputScreen = () => {
    return (
        <BackgroundImage>
            <Text>Age Input Screen</Text>
        </BackgroundImage>
    );
};

AgeInputScreen.navigationOptions = ({navigation}) => ({
    headerStyle: {paddingLeft:'10'},
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>
});