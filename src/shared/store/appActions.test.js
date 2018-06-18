import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import appActionTypes from './appActionTypes';
import { setGoal } from './appActions';

describe('appActions', () => {
    const middlewares = [thunk];
    const store = configureStore(middlewares)();

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
});