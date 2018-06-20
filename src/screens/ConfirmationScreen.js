import React from "react";
import UserDetailContainer from "../components/UserDetail/UserDetailContainer";
import Background from "../components/Background/Background";
import NavHandler from "../components/NavHandler/NavHandler";

const ConfirmationScreen = (props) => {
    return (
        <Background isConfirmationScreen={true}>
            <UserDetailContainer/>
            <NavHandler navigation={props.navigation} isConfirmationScreen={true}/>
        </Background>
    );
};

ConfirmationScreen.navigationOptions = () => ({
    header: null,
});

export default ConfirmationScreen;