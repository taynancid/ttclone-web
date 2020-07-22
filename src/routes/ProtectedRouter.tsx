import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export interface Props {
  component: React.FC;
  path: string;
  exact: boolean;
}

const ProtectedRouter: React.FC<Props> = ({
  component,
  path = '/',
  exact = false,
}) => {
  const { logged } = useSelector((state: RootState) => state.auth);

  return logged ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default ProtectedRouter;
