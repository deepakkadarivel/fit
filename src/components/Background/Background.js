import React, {Component} from "react";
import {Animated, ImageBackground} from "react-native";
import styles from "./backgroundStyleSheet";
import PropTypes from 'prop-types';

class Background extends Component {
    state = {
        slideInRightAnimation: new Animated.Value(-250),
        slideInLeftAnimation: new Animated.Value(250),
    };

    startAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.slideInRightAnimation, {
                toValue: 0,
                duration: 1000,
            }),
            Animated.timing(this.state.slideInLeftAnimation, {
                toValue: 0,
                duration: 1000,
            }),
        ]).start();

    };

    componentWillMount() {
        this.startAnimation();
    }

    render() {
        const slideInRightAnimatedStyle = {
            transform: [
                {
                    translateX: this.state.slideInRightAnimation,
                }
            ]
        };
        const slideInLeftAnimatedStyle = {
            transform: [
                {
                    translateX: this.state.slideInLeftAnimation,
                }
            ]
        };
        return (
            <ImageBackground source={require("../../assets/backgroundGrain.png")} style={styles.container}>
                {this.props.isLandingScreen &&
                <Animated.Image style={[styles.landingBeanImage, slideInRightAnimatedStyle]}
                                source={require("../../assets/imgBeans.png")}/>}
                {this.props.isLandingScreen &&
                <Animated.Image style={[styles.landingMatImage, slideInLeftAnimatedStyle]}
                                source={require("../../assets/imgMat.png")}/>}
                {this.props.isLandingScreen &&
                <Animated.Image style={[styles.landingDumbbellImage, slideInLeftAnimatedStyle]}
                                source={require("../../assets/imgDumbbell.png")}/>}

                {this.props.isConfirmationScreen &&
                <Animated.Image style={[styles.confirmationParsleyImage, slideInLeftAnimatedStyle]}
                                source={require("../../assets/imgParsley.png")}/>}
                {this.props.isConfirmationScreen &&
                <Animated.Image style={[styles.confirmationBeanImage, slideInRightAnimatedStyle]}
                                source={require("../../assets/imgBeans.png")}/>}

                {this.props.children}
            </ImageBackground>
        );
    }
}

Background.propTypes = {
    children: PropTypes.any,
    isLandingScreen: PropTypes.bool,
    isConfirmationScreen: PropTypes.bool,
};

Background.defaultProps = {
    isLandingScreen: false,
    isConfirmationScreen: false,
};

export default Background;
