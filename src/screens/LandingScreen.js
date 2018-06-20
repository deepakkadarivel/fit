import React from "react";
import {Image} from "react-native";
import Background from "../components/Background/Background";
import constants from "../shared/constants";
import GoalsListContainer from "../components/GoalsList/GoalsListContainer";
import CustomText from "../components/CustomText/CustomText";
import textStyle from "../components/CustomText/customTextStyleSheet";

const LandingScreen = (props) => {
    return (
        <Background isLandingScreen={true}>
            <Image source={require("../assets/icon8Logo.png")}/>
            <CustomText text={constants.APP_WELCOME_TEXT} style={textStyle.appTitle}/>
            <CustomText text={constants.QUESTION_GOAL} style={textStyle.question}/>
            <GoalsListContainer navigation={props.navigation}/>
        </Background>
    );
};

LandingScreen.navigationOptions = {
    header: null
};

export default LandingScreen;