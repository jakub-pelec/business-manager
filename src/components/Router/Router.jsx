import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/home' component={() => <div>Home</div>} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
