import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";

const CustomText = (props) => {
    return (
        <Text
            style={props.style}
        >{props.text}</Text>
    );
};

CustomText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.any,
};

export default CustomText;