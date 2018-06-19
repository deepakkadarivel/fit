import React from "react";
import {Image, TouchableOpacity, Text} from "react-native";
import UserDetailContainer from "../components/UserDetail/UserDetailContainer";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import constants from "../shared/constants";

const ConfirmationScreen = (props) => {
    return (
        <BackgroundImage sourceType={constants.BackgroundSourceTypes.PARSLEY}>
            <UserDetailContainer/>
        </BackgroundImage>
    );
};

ConfirmationScreen.navigationOptions = ({navigation}) => ({
    headerMode: 'none',
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: 'white',
    },
});

export default ConfirmationScreen;