import appActionTypes from './appActionTypes';
import appReducer from './appReducer';
import appInitialState from './appInitialState';

describe('appReducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(appInitialState);
    });

    it(`should handle ${appActionTypes.SET_GOAL}`, () => {
        const goal = {
            id: 'lose_weight',
            title: 'Lose weight',
            description: 'Burn fat & get lean',
        };

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: goal,
            age: appInitialState.age,
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: appInitialState.heightInCM,
            heightInFT: appInitialState.heightInFT,
            heightInIN: appInitialState.heightInIN,
        };
        const action = {
            type: appActionTypes.SET_GOAL,
            goal
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_AGE}`, () => {
        const age = '24';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: '24',
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: appInitialState.heightInCM,
            heightInFT: appInitialState.heightInFT,
            heightInIN: appInitialState.heightInIN,
        };
        const action = {
            type: appActionTypes.SET_AGE,
            age
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.TOGGLE_HEIGHT_IN_CM}`, () => {
        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            isHeightInCM: false,
            heightInCM: appInitialState.heightInCM,
            heightInFT: appInitialState.heightInFT,
            heightInIN: appInitialState.heightInIN,
        };
        const toggleAction = {
            type: appActionTypes.TOGGLE_HEIGHT_IN_CM,
            toggle: false,
        };
        const reducerOutput = appReducer(appInitialState, toggleAction);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_HEIGHT}`, () => {
        const heightInCM = '182';
        const heightInFT = '5';
        const heightInIN = '12';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: '182',
            heightInFT: '5',
            heightInIN: '12',
        };
        const action = {
            type: appActionTypes.SET_HEIGHT,
            heightInCM,
            heightInFT,
            heightInIN,
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });
});
