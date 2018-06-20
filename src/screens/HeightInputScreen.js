import React from "react";
import UserHeightContainer from "../components/UserHeight/UserHeightContainer";
import NavHandler from "../components/NavHandler/NavHandler";

const HeightInputScreen = (props) => {
    return (
        <UserHeightContainer navigation={props.navigation}/>
    );
};

HeightInputScreen.navigationOptions = ({navigation}) => ({
    headerLeft: <NavHandler navigation={navigation}/>,
    headerStyle: {
        backgroundColor: 'white',
    },
});

export default HeightInputScreen;