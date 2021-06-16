import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import reducer from '../../reducers/reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Providers = ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Providers;
