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

const toggleHeightInCM = () => {
    return {
        type: appActionTypes.TOGGLE_HEIGHT_IN_CM,
    };
};

const setHeightInCM = (heightInCM) => {
    return {
        type: appActionTypes.SET_HEIGHT_IN_CM,
        heightInCM
    };
};

export { setGoal, setAge, toggleHeightInCM, setHeightInCM };