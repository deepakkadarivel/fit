import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./customSegmentStleSheet";
import PropTypes from 'prop-types';
import constants from "../../shared/constants";

class CustomSegment extends Component {
    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    style={this.props.isHeightInCM ? styles.buttonInactive : styles.buttonActiveLeft}
                    onPress={() => this.props.toggleHeightInCM(false)}
                >
                    <Text style={this.props.isHeightInCM ? styles.buttonTextBlack : styles.buttonTextWhite}>
                        {constants.FT_TOGGLE_TITLE}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={this.props.isHeightInCM ? styles.buttonActiveRight : styles.buttonInactive}
                    onPress={() => this.props.toggleHeightInCM(true)}
                >
                    <Text style={this.props.isHeightInCM ? styles.buttonTextWhite : styles.buttonTextBlack}>
                        {constants.CM_TOGGLE_TITLE}
                    </Text>
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
