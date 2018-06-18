import React from "react";
import {createStackNavigator} from 'react-navigation';
import LandingScreen from "./src/screens/LandingScreen";
import AgeInputScreen from "./src/screens/AgeInputScreen";

export default class App extends React.Component {
    render() {
        return (
            <AppStackNavigator/>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Landing: LandingScreen,
    AgeInput: AgeInputScreen
});