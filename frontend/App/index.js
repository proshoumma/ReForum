import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import styles from './styles';

import AppContainer from './App';
import ForumFeed from '../Views/ForumFeed';
import SinglePost from '../Views/SinglePost';
import NotFound from '../Views/NotFound';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ForumFeed} />
      <Route path=":forum" component={ForumFeed} />
      <Route path="post/:postId" component={SinglePost} />
    </Route>
  </Router>,
  document.getElementById('root')
);
