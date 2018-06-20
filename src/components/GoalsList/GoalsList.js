import React, {Component} from "react";
import {Animated, FlatList, Image, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import styles from './goalsStyleSheet';
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

const extractKey = ({id}) => id;

class GoalsList extends Component {

    state = {
        viewOpacity: new Animated.Value(0),
        viewTransform: new Animated.Value(0),
        viewScale: new Animated.Value(0.8),
    };

    startAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.viewOpacity, {
                toValue: 0,
                duration: 800,
            }),
            Animated.parallel([
                Animated.timing(this.state.viewOpacity, {
                    toValue: 1,
                    duration: 1000,
                }),
                Animated.timing(this.state.viewTransform, {
                    toValue: 0,
                    duration: 400,
                }),
                Animated.timing(this.state.viewScale, {
                    toValue: 1,
                    duration: 500,
                }),
                Animated.delay(500)
            ]),
        ]).start();
    };

    componentDidMount() {
        this.startAnimation();
    }

    renderItem = ({item}) => {
        const setGoal = (item) => {
            this.props.setGoal(item);
            this.props.navigation.push('AgeInput');
        };
        const textAnimatedStyle = {
            opacity: this.state.viewOpacity,
            transform: [
                {
                    translateY: this.state.viewTransform,
                },
                {
                    scale: this.state.viewScale,
                },
            ],
        };

        return (
            <TouchableOpacity onPress={() => setGoal(item)}>
                <Animated.View style={[styles.row, textAnimatedStyle]}>
                    <View>
                        <CustomText text={item.title} style={textStyle.goalTitle}/>
                        <CustomText text={item.description} style={textStyle.goalDescription}/>
                    </View>
                    <Image
                        source={require('../../assets/chevronRight.png')}
                        resizeMode="contain"
                    />
                </Animated.View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View
                style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={this.props.goals}
                    renderItem={this.renderItem}
                    keyExtractor={extractKey}
                />
            </View>
        );
    }
}

GoalsList.propTypes = {
    goals: PropTypes.array.isRequired,
    setGoal: PropTypes.func.isRequired,
};

export default GoalsList;