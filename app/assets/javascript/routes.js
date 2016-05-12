import React, { PropTypes, Component } from 'react';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

import HomeContainer from './containers/home';
import Home from './components/home';

const Root = React.createClass({
  render() {
    return (
      <Router history = {history}>
        <Route name='home' path='/' component={HomeContainer}>
          <Route name="home" path='/home' component={Home} />
        </Route>
      </Router>
    );
  },
});

export default Root;
