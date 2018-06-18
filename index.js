import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import reducer from './src/shared/store/appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
    reducer, composeEnhancers(applyMiddleware(...middleware))
);

const AppWithStore = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('fit', () => AppWithStore);
