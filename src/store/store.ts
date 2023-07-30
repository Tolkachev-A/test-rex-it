// eslint-disable-next-line camelcase
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { basketReducer } from './reducers/basketReducer';
import { ingredientsReducer } from './reducers/ingredientsReducer';

const rootReducer = combineReducers({
  ingredientState: ingredientsReducer,
  basketState: basketReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
