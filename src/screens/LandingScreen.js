import React, {Component} from "react";
import {Animated} from "react-native";
import Background from "../components/Background/Background";
import constants from "../shared/constants";
import GoalsListContainer from "../components/GoalsList/GoalsListContainer";
import CustomText from "../components/CustomText/CustomText";
import textStyle from "../components/CustomText/customTextStyleSheet";

class LandingScreen extends Component {
    state = {
        logoAnimation: new Animated.Value(250),
        textOpacity: new Animated.Value(0),
        textTransform: new Animated.Value(10),
    };

    startAnimation = () => {

        Animated.sequence([
            Animated.timing(this.state.logoAnimation, {
                toValue: 0,
                duration: 1000,
            }),
            Animated.parallel([
                Animated.timing(this.state.textOpacity, {
                    toValue: 1,
                    duration: 500,
                }),
                Animated.timing(this.state.textTransform, {
                    toValue: 0,
                    duration: 500,
                }),
                Animated.delay(1000)
            ]),
        ]).start();

    };

    componentWillMount() {
        this.startAnimation();
    }

    render() {
        const logoAnimatedStyle = {
            transform: [
                {
                    translateY: this.state.logoAnimation,
                }
            ]
        };

        const welcomeTextStyle = {
            opacity: this.state.textOpacity,
            transform: [
                {
                    translateY: this.state.textTransform,
                }
            ]
        };

        return (
            <Background isLandingScreen={true}>
                <Animated.Image source={require("../assets/icon8Logo.png")} style={logoAnimatedStyle}/>
                <Animated.View style={welcomeTextStyle}>
                    <CustomText text={constants.APP_WELCOME_TEXT} style={textStyle.appTitle}/>
                </Animated.View>
                <Animated.View style={welcomeTextStyle}>
                    <CustomText text={constants.QUESTION_GOAL} style={textStyle.question}/>
                </Animated.View>
                <GoalsListContainer navigation={this.props.navigation}/>
            </Background>
        );
    }
}

LandingScreen.navigationOptions = {
    header: null
};

export default LandingScreen;