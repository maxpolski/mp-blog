import React, { Component } from 'react';
import { Router, Route, browserHistory }    from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import { Provider }  from 'react-redux';
import {
  compose,
  createStore,
  applyMiddleware }      from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import MainReducer from '../reducers/mainReducer';
import Layout      from './Layout';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(MainReducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component = { Layout } />
          </Router>
        </Provider>
      </div>
    )
  }
}
