import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import reducer from '../../reducers/reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Router from '../Router/Router';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Providers = () => {
    return (
        <ReduxProvider store={store}>
            <Router />
        </ReduxProvider>
    );
};

export default Providers;
