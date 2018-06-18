import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './src/shared/store/appReducer'
const store = createStore(reducer);

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('fit', () => AppWithStore);
