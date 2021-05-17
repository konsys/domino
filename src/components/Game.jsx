import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import GameLoader from './GameLoader';
import Selection from './Selection';
import MobileControl from './MobileControl';

import Display from './Display';

import rootReducer from '../reducers';
import { Route, Switch } from 'react-router-dom';

const combinedReducers = combineReducers(rootReducer);
const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));

function Game() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Selection} />
        <Route path="/classic" component={GameLoader} />
        <Route path="/controller" component={MobileControl} />
        <Route path="/display" component={Display} />
      </Switch>
    </Provider>
  );
}

export default Game;
