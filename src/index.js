
import 'babel-polyfill';

import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './_Reducer/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from  'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from "react-dom";
import React from 'react';
import App from './App';


const logger = createLogger();

const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk, promise, logger)
    )
    
);


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,document.getElementById('root')
);
