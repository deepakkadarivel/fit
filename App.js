import React from "react";
import {Text, Image} from "react-native";
import BackgroundImage from "./src/components/BackgroundImage/BackgroundImage";
import constants from "./src/shared/constants";
import styles from "./appStyleSheet";
import commonStyles from "./src/styles/commonStyleSheet";

export default class App extends React.Component {
    render() {
        return (
            <BackgroundImage>
                <Image
                    style={styles.logo}
                    source={require("./src/assets/icon8Logo.png")}
                />
                <Text
                    style={styles.appTitle}
                >{constants.APP_WELCOME_TEXT}</Text>
                <Text
                    style={commonStyles.question}
                >{constants.QUESTION_GOAL}</Text>
            </BackgroundImage>
        );
    }
}