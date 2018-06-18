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
                    style={this.props.isHeightInCM ? styles.buttonActiveLeft : styles.buttonInactive}
                    onPress={this.props.toggleHeightInCM}
                >
                    <Text style={this.props.isHeightInCM ? styles.buttonTextWhite : styles.buttonTextBlack}>
                        {constants.CM}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={this.props.isHeightInCM ? styles.buttonInactive : styles.buttonActiveRight}
                    onPress={this.props.toggleHeightInCM}
                >
                    <Text style={this.props.isHeightInCM ? styles.buttonTextBlack : styles.buttonTextWhite}>
                        {constants.FT}
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
