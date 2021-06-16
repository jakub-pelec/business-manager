import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
