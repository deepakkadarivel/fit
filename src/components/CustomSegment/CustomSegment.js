import React, {Component} from "react";
import {TouchableOpacity, View} from "react-native";
import styles from "./customSegmentStleSheet";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

class CustomSegment extends Component {
    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    style={this.props.isHeightInCM ? styles.buttonInactive : styles.buttonActiveLeft}
                    onPress={() => this.props.toggleHeightInCM(false)}>

                    <CustomText
                        text={constants.FT_TOGGLE_TITLE}
                        style={this.props.isHeightInCM ? textStyle.buttonTextBlack : textStyle.buttonTextWhite}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={this.props.isHeightInCM ? styles.buttonActiveRight : styles.buttonInactive}
                    onPress={() => this.props.toggleHeightInCM(true)}>
                    <CustomText
                        text={constants.CM_TOGGLE_TITLE}
                        style={this.props.isHeightInCM ? textStyle.buttonTextWhite : textStyle.buttonTextBlack}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

CustomSegment.propTypes = {
    isHeightInCM: PropTypes.bool.isRequired,
    toggleHeightInCM: PropTypes.func,
};

export default CustomSegment;
