import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Login} />
    </Switch>
);

export default Routes;