import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import AdminHeader from 'Containers/AdminHeader';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import { getForums, updateCurrentForum, getUser } from './actions';

class AdminContainer extends Component {
  componentDidMount() {
    const {
      params,
      getForums,
      getUser,
    } = this.props;

    // get all forum list
    getForums();

    // check for authenticated user
    getUser();
  }

  componentDidUpdate() {
    const { _id, role } = this.props.user;

    // non admin users will be redirected to '/'
    if (_id && role !== 'admin') {
      browserHistory.push('/');
    }
  }

  render() {
    const { forums } = this.props;

    // render only if we get the forum lists
    if (forums) {
      return (
        <div>
          <AdminHeader />
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
    user: state.user,
    forums: state.app.forums,
  }; },
  (dispatch) => { return {
    getForums: () => { dispatch(getForums()); },
    getUser: () => { dispatch(getUser()); },
  }; }
)(AdminContainer);
