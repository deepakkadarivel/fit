import React from "react";
import {FlatList, Image, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import styles from './goalsStyleSheet';
import textStyle from "../CustomText/customTextStyleSheet";
import CustomText from "../CustomText/CustomText";

const extractKey = ({id}) => id;

const GoalsList = (props) => {


    renderItem = ({item}) => {
        const setGoal = (item) => {
            props.setGoal(item);
            props.navigation.push('AgeInput');
        };

        return (
            <TouchableOpacity onPress={() => setGoal(item)}>
                <View style={styles.row}>
                    <View>
                        <CustomText text={item.title} style={textStyle.goalTitle}/>
                        <CustomText text={item.description} style={textStyle.goalDescription}/>
                    </View>
                    <Image
                        source={require('../../assets/chevronRight.png')}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View
            style={styles.container}>
            <FlatList
                scrollEnabled={false}
                data={props.goals}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        </View>
    );
};

GoalsList.propTypes = {
    goals: PropTypes.array.isRequired,
    setGoal: PropTypes.func.isRequired,
};

export default GoalsList;