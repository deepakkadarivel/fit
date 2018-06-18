import React from "react";
import {Image, TouchableOpacity} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import UserHeightContainer from "../components/UserHeight/UserHeightContainer";

const HeightInputScreen = (props) => {
    return (
        <BackgroundImage>
            <UserHeightContainer navigation={props.navigation}/>
        </BackgroundImage>
    );
};

HeightInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>
});

export default HeightInputScreen;