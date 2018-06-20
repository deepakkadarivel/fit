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

const toggleHeightInCM = (toggle) => {
    return {
        type: appActionTypes.TOGGLE_HEIGHT_IN_CM,
        toggle
    };
};

const setHeightInCM = (heightInCM) => {
    return {
        type: appActionTypes.SET_HEIGHT_IN_CM,
        heightInCM
    };
};

const setHeightInFT = (heightInFT) => {
    return {
        type: appActionTypes.SET_HEIGHT_IN_FT,
        heightInFT
    };
};

const setHeightInIN = (heightInIN) => {
    return {
        type: appActionTypes.SET_HEIGHT_IN_IN,
        heightInIN
    };
};

export { setGoal, setAge, toggleHeightInCM, setHeightInCM, setHeightInFT, setHeightInIN };