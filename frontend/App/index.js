import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import styles from './styles';

import AppContainer from './App';
import ForumFeed from '../Views/ForumFeed';
import SingleDiscussion from '../Views/SingleDiscussion';
import NewDiscussion from '../Views/NewDiscussion';
import NotFound from '../Views/NotFound';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ForumFeed} />
      <Route path=":forum" component={ForumFeed} />
      <Route path=":forum/discussion/:postId" component={SingleDiscussion} />
      <Route path=":forum/new" component={NewDiscussion} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
