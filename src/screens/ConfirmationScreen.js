import React from "react";
import {Image, TouchableOpacity} from "react-native";
import UserDetailContainer from "../components/UserDetail/UserDetailContainer";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import styles from "../components/UserDetail/userDetailStyleSheet";

const ConfirmationScreen = (props) => {
    return (
        <BackgroundImage>
            <UserDetailContainer/>
            <TouchableOpacity
                style={styles.navLeft}
                onPress={() => props.navigation.goBack()}>
                <Image source={require('../assets/icArrowLeft.png')}/>
            </TouchableOpacity>
        </BackgroundImage>
    );
};

ConfirmationScreen.navigationOptions = () => ({
    header: null,
});

export default ConfirmationScreen;