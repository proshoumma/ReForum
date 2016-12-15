import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from '../Views/Home';
import NotFound from '../Views/NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
