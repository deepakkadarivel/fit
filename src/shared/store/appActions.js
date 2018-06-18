import appActionTypes from './appActionTypes';

const setGoal = (goal) => {
    return {
        type: appActionTypes.SET_GOAL,
        goal
    };
};

export { setGoal };