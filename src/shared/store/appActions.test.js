import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import appActionTypes from './appActionTypes';
import {setGoal, setAge, setHeightInCM, toggleHeightInCM, setHeightInIN, setHeightInFT} from './appActions';
import appInitialState from "./appInitialState";

describe('appActions', () => {
    const middlewares = [thunk];
    // const store = configureStore(middlewares)();
    const mockStore = configureMockStore(middlewares);
    beforeEach(() => {
        state = {
            goal: appInitialState.goal,
            selectedGoal: appInitialState.selectedGoal,
            age: appInitialState.age,
            heightInCM: appInitialState.heightInCM,
        };
        store = mockStore(state);
    });

    it(`Should set goal on ${appActionTypes.SET_GOAL} action`, () => {
        const goal = {
            id: 'lose_weight',
            title: 'Lose weight',
            description: 'Burn fat & get lean',
        };
        const expectedActions = [
            {
                type: appActionTypes.SET_GOAL,
                goal
            }
        ];

        store.dispatch(setGoal(goal));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it(`Should set age on ${appActionTypes.SET_AGE} action`, () => {
        const age = '24';
        const expectedActions = [
            {
                type: appActionTypes.SET_AGE,
                age
            }
        ];

        store.dispatch(setAge(age));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it(`Should toggle height in cm on ${appActionTypes.TOGGLE_HEIGHT_IN_CM} action`, () => {
        const expectedActions = [
            {
                type: appActionTypes.TOGGLE_HEIGHT_IN_CM,
                toggle: true,
            }
        ];

        store.dispatch(toggleHeightInCM(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it(`Should set height in cm on ${appActionTypes.SET_HEIGHT_IN_CM} action`, () => {
        const heightInCM = '128';
        const expectedActions = [
            {
                type: appActionTypes.SET_HEIGHT_IN_CM,
                heightInCM
            }
        ];

        store.dispatch(setHeightInCM(heightInCM));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it(`Should set height in ft on ${appActionTypes.SET_HEIGHT_IN_FT} action`, () => {
        const heightInFT = '5';
        const expectedActions = [
            {
                type: appActionTypes.SET_HEIGHT_IN_FT,
                heightInFT
            }
        ];

        store.dispatch(setHeightInFT(heightInFT));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it(`Should set height in in on ${appActionTypes.SET_HEIGHT_IN_IN} action`, () => {
        const heightInIN = '12';
        const expectedActions = [
            {
                type: appActionTypes.SET_HEIGHT_IN_IN,
                heightInIN
            }
        ];

        store.dispatch(setHeightInIN(heightInIN));

        expect(store.getActions()).toEqual(expectedActions);
    });
});