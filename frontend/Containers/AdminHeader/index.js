import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classnames from 'classnames';

import appLayout from 'SharedStyles/appLayout';
import styles from './styles';

// components for AdminHeader
import UserMenu from 'Components/Header/UserMenu';
import Logo from 'Components/Header/Logo';
import NavigationBar from 'Components/Header/NavigationBar';
import PlaceholderImage from 'SharedStyles/placeholder.jpg';

class AdminHeader extends Component {
  renderNavLinks() {
    return [
      { name: 'Dashboard', link: '/admin' },
    ];
  }

  render() {
    const {
      authenticated,
      name,
      username,
      avatarUrl,
    } = this.props.user;

    return (
      <div className={classnames(appLayout.constraintWidth)}>
        <div className={styles.headerTop}>
          <Logo />
          Welcome Admin
          <UserMenu
            signedIn={authenticated}
            userName={name || username}
            gitHandler={username}
            avatar={avatarUrl}
          />
        </div>
        <NavigationBar
          navigationLinks={this.renderNavLinks()}
        />
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    user: state.user,
    forums: state.app.forums,
  }; }
)(AdminHeader);
