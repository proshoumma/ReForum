import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Header from '../Containers/Header';
import Home from '../Views/Home';
import NotFound from '../Views/NotFound';

import globalStyles from 'SharedStyles/globalStyles';
import appLayout from 'SharedStyles/appLayout';
import styles from './styles';

ReactDOM.render (
  <div className={styles.appContainer}>
    <Header />

    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  </div>,
  document.getElementById('root')
);
