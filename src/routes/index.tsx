import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  const { logged } = useSelector((state: RootState) => state.auth);

  return (
    <Switch>
      {!logged ? (
        <Route path="/" exact component={Login} />
      ) : (
        <Route path="/home" exact component={Home} />
      )}
    </Switch>
  );
};

export default Routes;
