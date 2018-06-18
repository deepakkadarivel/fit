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
            heightInCM: appInitialState.heightInCM,
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
            heightInCM: appInitialState.heightInCM,
        };
        const action = {
            type: appActionTypes.SET_AGE,
            age
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });

    it(`should handle ${appActionTypes.SET_HEIGHT_IN_CM}`, () => {
        const heightInCM = '182';

        const expectedState = {
            goals: appInitialState.goals,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            heightInCM: '182',
        };
        const action = {
            type: appActionTypes.SET_HEIGHT_IN_CM,
            heightInCM
        };
        const reducerOutput = appReducer(appInitialState, action);

        expect(reducerOutput).toEqual(expectedState);
    });
});
