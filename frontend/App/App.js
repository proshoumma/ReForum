import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import { getForums, updateCurrentForum } from './actions';

class AppContainer extends Component {
  componentDidMount() {
    const {
      params,
      updateCurrentForum,
      getForums,
    } = this.props;

    // get all forum list
    getForums();

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
          <Header forums={this.props.forums} />
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
  }; }
)(AppContainer);
