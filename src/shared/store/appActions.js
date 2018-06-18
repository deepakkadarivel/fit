import appActionTypes from './appActionTypes';

const setGoal = (goal) => {
    return {
        type: appActionTypes.SET_GOAL,
        goal
    };
};

const setAge = (age) => {
    return {
        type: appActionTypes.SET_AGE,
        age
    };
};

export { setGoal, setAge };