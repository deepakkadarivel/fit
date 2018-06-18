import appActionTypes from './appActionTypes';
import appInitialState from './appInitialState';

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case appActionTypes.SET_GOAL:
            return state.set('selectedGoal', action.goal);

        case appActionTypes.SET_AGE:
            return state.set('age', action.age);

        default:
            return state;
    }
};

export default appReducer;
