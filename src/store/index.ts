import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
