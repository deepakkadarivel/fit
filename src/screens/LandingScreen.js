import React from "react";
import {Image, Text} from "react-native";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import constants from "../shared/constants";
import styles from "../styles/landingStyleSheet";
import commonStyles from "../styles/commonStyleSheet";
import GoalsListContainer from "../components/GoalsList/GoalsListContainer";

export default LandingScreen = (props) => {
    return (
        <BackgroundImage>
            <Image
                style={styles.logo}
                source={require("../assets/icon8Logo.png")}
            />
            <Text
                style={styles.appTitle}
            >{constants.APP_WELCOME_TEXT}</Text>
            <Text
                style={commonStyles.question}
            >{constants.QUESTION_GOAL}</Text>
            <GoalsListContainer navigation={props.navigation}/>
        </BackgroundImage>
    );
};

LandingScreen.navigationOptions = {
    header: null
};