import React from "react";
import {Image, TouchableOpacity} from "react-native";
import UserHeightContainer from "../components/UserHeight/UserHeightContainer";

const HeightInputScreen = (props) => {
    return (
        <UserHeightContainer navigation={props.navigation}/>
    );
};

HeightInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icArrowLeft.png')}/>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: 'white',
    },
});

export default HeightInputScreen;