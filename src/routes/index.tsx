import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedRouter from './ProtectedRouter';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRouter path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
