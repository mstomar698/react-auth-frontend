import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Signup">
                <Signup />
            </Route>
        </Switch>
    );
}

export default Routes;