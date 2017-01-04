import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from '../Views/Home';
import NotFound from '../Views/NotFound';

// global styles
// (normalize and skeleton should be replace with cdn in prod)
import NormalizeCSS from './normalize';
import SkeletonCSS from './skeleton';
import GlobalStyles from './styles';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
