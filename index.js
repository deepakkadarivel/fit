import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './src/shared/store/appReducer'
// const store = createStore(reducer);

let middleware = applyMiddleware(thunk);
if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-line
    middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
}

const store = createStore(reducer, middleware);

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('fit', () => AppWithStore);
