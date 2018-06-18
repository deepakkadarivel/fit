import React from "react";
import {Image, TouchableOpacity} from "react-native";
import UserAgeContainer from "../components/UserAge/UserAgeContainer";

const AgeInputScreen = (props) => {
    return (
        <UserAgeContainer navigation={props.navigation}/>
    );
};

AgeInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: 'white',
    },
});

export default AgeInputScreen;