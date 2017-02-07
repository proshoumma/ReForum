import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import styles from './styles';

// app store
import appStore from './store';

// app views
import AppContainer from './App';
import ForumFeed from '../Views/ForumFeed';
import SingleDiscussion from '../Views/SingleDiscussion';
import NewDiscussion from '../Views/NewDiscussion';
import NotFound from '../Views/NotFound';

ReactDOM.render (
  <Provider store={appStore}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={ForumFeed} />
        <Route path=":forum" component={ForumFeed} />
        <Route path=":forum/discussion/:postId" component={SingleDiscussion} />
        <Route path=":forum/new" component={NewDiscussion} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
