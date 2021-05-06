import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { AppRegistry, LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

// REDUX
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/Redux/store/reducer';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware)),
);

const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);