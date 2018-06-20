import React from "react";
import UserAgeContainer from "../components/UserAge/UserAgeContainer";
import NavHandler from "../components/NavHandler/NavHandler";

const AgeInputScreen = (props) => {
    return (
        <UserAgeContainer navigation={props.navigation}/>
    );
};

AgeInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft: <NavHandler navigation={navigation}/>,
    headerStyle: {
        backgroundColor: 'white',
    },
});

export default AgeInputScreen;