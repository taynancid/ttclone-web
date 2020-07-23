import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedRouter from './ProtectedRouter';

const Routes: React.FC = () => {
  const { logged } = useSelector((state: RootState) => state.auth);

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRouter path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
