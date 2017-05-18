import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getUser } from './actions';

import AdminHeader from 'Containers/AdminHeader';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

class AdminContainer extends Component {
  componentDidMount() {
    // fetch the user
    this.props.getUser();
  }

  render() {
    const { user } = this.props;

    if (user.fetchingUser) {
      return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          Loading users profile...
        </div>
      );
    }

    if (user.role === 'admin') {
      return (
        <div>
          <Helmet><title>ReForum | Admin</title></Helmet>
          <AdminHeader />
          {this.props.children}
        </div>
      );
    }
    else {
      return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          We are cordially sorry that you are not allowed to view admin panel!<br />
          Please go back to <Link to='/'>root</Link> page.
        </div>
      );
    }

    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        Something went wrong.<br />
        Please go back to <Link to='/'>root</Link> page.
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    user: state.user,
  }; },
  (dispatch) => { return {
    getUser: () => { dispatch(getUser()); },
  }; }
)(AdminContainer);
