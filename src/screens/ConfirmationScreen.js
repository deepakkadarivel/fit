import React from "react";
import UserDetailContainer from "../components/UserDetail/UserDetailContainer";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import NavHandler from "../components/NavHandler/NavHandler";

const ConfirmationScreen = (props) => {
    return (
        <BackgroundImage>
            <UserDetailContainer/>
            <NavHandler navigation={props.navigation} isConfirmationScreen={true}/>
        </BackgroundImage>
    );
};

ConfirmationScreen.navigationOptions = () => ({
    header: null,
});

export default ConfirmationScreen;