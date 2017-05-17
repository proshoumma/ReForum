import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import styles from './styles';

// app store
import appStore from './store';

// app views
import AppContainer from './App';
import AdminContainer from './Admin';
import Dashboard from '../Views/AdminDashboard';
import Header from 'Containers/Header';
import ForumFeed from '../Views/ForumFeed';
import SingleDiscussion from '../Views/SingleDiscussion';
import NewDiscussion from '../Views/NewDiscussion';
import UserProfile from '../Views/UserProfile';
import NotFound from '../Views/NotFound';

ReactDOM.render (
  <Provider store={appStore}>
    <Router history={browserHistory}>
      <Route path="/admin" component={AdminContainer}>
        <IndexRoute component={Dashboard} />
      </Route>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={ForumFeed} />
        <Route path=":forum" component={ForumFeed} />
        <Route path=":forum/discussion/:discussion" component={SingleDiscussion} />
        <Route path=":forum/new_discussion" component={NewDiscussion} />
        <Route path="user/:username" component={UserProfile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
