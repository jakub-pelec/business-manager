import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path='/home' component={() => <div>Home</div>} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
