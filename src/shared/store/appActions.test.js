import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import appActionTypes from './appActionTypes';
import {setAge, setGoal, setHeight, toggleHeightInCM} from './appActions';
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

    it(`Should set height in cm on ${appActionTypes.SET_HEIGHT} action`, () => {
        const heightInCM = '128';
        const heightInFT = '5';
        const heightInIN = '12';

        const expectedActions = [
            {
                type: appActionTypes.SET_HEIGHT,
                heightInCM,
                heightInFT,
                heightInIN
            }
        ];

        store.dispatch(setHeight(heightInCM, heightInFT, heightInIN));

        expect(store.getActions()).toEqual(expectedActions);
    });
});