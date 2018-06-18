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
            type: appActionTypes.TOGGLE_HEIGHT_IN_CM
        };
        const reducerOutput = appReducer(appInitialState, toggleAction);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_HEIGHT_IN_CM}`, () => {
        const heightInCM = '182';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: '182',
            heightInFT: appInitialState.heightInFT,
            heightInIN: appInitialState.heightInIN,
        };
        const action = {
            type: appActionTypes.SET_HEIGHT_IN_CM,
            heightInCM
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_HEIGHT_IN_FT}`, () => {
        const heightInFT = '5';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: appInitialState.heightInCM,
            heightInFT: '5',
            heightInIN: appInitialState.heightInIN,
        };
        const action = {
            type: appActionTypes.SET_HEIGHT_IN_FT,
            heightInFT
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_HEIGHT_IN_IN}`, () => {
        const heightInIN = '12';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            isHeightInCM: appInitialState.isHeightInCM,
            heightInCM: appInitialState.heightInCM,
            heightInFT: appInitialState.heightInFT,
            heightInIN: '12',
        };
        const action = {
            type: appActionTypes.SET_HEIGHT_IN_IN,
            heightInIN
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });
});
