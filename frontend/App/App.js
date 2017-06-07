import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Header from 'Containers/Header';
import Footer from 'Components/Footer';
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
    const currentForum = params.forum || '';
    updateCurrentForum(currentForum);
  }

  componentDidUpdate() {
    const {
      forums,
      params,
      currentForum,
      updateCurrentForum,
    } = this.props;

    let newCurrentForum = '';
    if (params.forum) newCurrentForum = params.forum;
    else if (forums) newCurrentForum = forums[0].forum_slug;

    // update current forum if necessery
    if (newCurrentForum !== currentForum) updateCurrentForum(newCurrentForum);
  }

  render() {
    const { forums } = this.props;

    // render only if we get the forum lists
    if (forums) {
      return (
        <div>
          <Helmet><title>ReForum</title></Helmet>

          <div className={styles.gitForkTag}>
            <a className={styles.gitLink} href="https://github.com/shoumma/ReForum" target="_blank">Fork on Github</a>
          </div>

          <Header />
          {this.props.children}
          <Footer />
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
