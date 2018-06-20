import appActionTypes from './appActionTypes';
import appInitialState from './appInitialState';

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case appActionTypes.SET_GOAL:
            return state.set('selectedGoal', action.goal);

        case appActionTypes.SET_AGE:
            return state.set('age', action.age);

        case appActionTypes.TOGGLE_HEIGHT_IN_CM:
            return state.set('isHeightInCM', action.toggle);

        case appActionTypes.SET_HEIGHT_IN_CM:
            return state.set('heightInCM', action.heightInCM);

        case appActionTypes.SET_HEIGHT_IN_FT:
            return state.set('heightInFT', action.heightInFT);

        case appActionTypes.SET_HEIGHT_IN_IN:
            return state.set('heightInIN', action.heightInIN);

        default:
            return state;
    }
};

export default appReducer;
