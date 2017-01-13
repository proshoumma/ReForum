import React, { Component } from 'react';
import ClassNames from 'classnames';
import styles from './styles';

class UserMenu extends Component {
  render() {
    const {
      loggedIn,
      userName,
      avatar,
    } = this.props;

    if (loggedIn) {
      return (
        <div className={styles.container}>
          <img className={styles.userAvatar} src={avatar} alt={`${userName} Avatar`} />
          <span className={styles.title}>{userName}</span>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <div className={ClassNames(styles.signInBtn, styles.title)}>
          Sign Up / Sign In
        </div>
      </div>
    );
  }
}

UserMenu.defaultProps = {
  loggedIn: false,
  userName: '',
  avatar: '',
};

UserMenu.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  userName: React.PropTypes.string,
  avatar: React.PropTypes.string,
};

export default UserMenu;
