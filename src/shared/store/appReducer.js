import appActionTypes from './appActionTypes';
import appInitialState from './appInitialState';

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case appActionTypes.SET_GOAL:
            return state.set('selectedGoal', action.goal);

        default:
            return state;
    }
};

export default appReducer;
