import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import { getForums, updateCurrentForum, getUser } from './actions';

class AppContainer extends Component {
  componentDidMount() {
    const {
      params,
      updateCurrentForum,
      getForums,
      getUser,
    } = this.props;

    // get all forum list
    getForums();

    // check for authenticated user
    getUser();

    // set current forum based on route
    const currentForum = params.forum || 'general';
    updateCurrentForum(currentForum);
  }

  componentDidUpdate() {
    const {
      params,
      currentForum,
      updateCurrentForum,
    } = this.props;

    const newCurrentForum = params.forum || 'general';

    // update current forum if necessery
    if (newCurrentForum !== currentForum) updateCurrentForum(newCurrentForum);
  }

  render() {
    const { forums } = this.props;

    // render only if we get the forum lists
    if (forums) {
      return (
        <div>
          <Header />
          {this.props.children}
        </div>
      );
    }

    return (
      <div className={styles.loadingWrapper}>Loading...</div>
    );
  }
}

export default connect(
  (state) => { return {
    forums: state.app.forums,
    currentForum: state.app.currentForum,
  }; },
  (dispatch) => { return {
    getForums: () => { dispatch(getForums()); },
    updateCurrentForum: (currentForum) => { dispatch(updateCurrentForum(currentForum)); },
    getUser: () => { dispatch(getUser()); },
  }; }
)(AppContainer);
