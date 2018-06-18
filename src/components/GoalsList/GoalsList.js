import React from "react";
import {Alert, FlatList, Text, View, Image, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import styles from './goalsStyleSheet';

const extractKey = ({id}) => id;

const GoalsList = (props) => {


    renderItem = ({item}) => {
        const setGoal = (item) => {
            props.setGoal(item);
            Alert.alert(item.title);
        };

        return (
            <TouchableOpacity
                onPress={() => setGoal(item)}
            >
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
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