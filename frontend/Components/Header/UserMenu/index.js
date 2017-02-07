import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

import Button from 'Components/Button';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSubMenu: false };
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  toggleSubMenu() {
    this.setState((prevState) => {
      return { activeSubMenu: !prevState.activeSubMenu };
    });
  }

  renderSubMenu() {
    const { activeSubMenu } = this.state;

    if (activeSubMenu) {
      return (
        <div className={styles.subMenu}>
          <Button className={styles.subMenuClose} onClick={this.toggleSubMenu} alwaysActive>
            <i className={classnames('fa fa-close')}></i>
          </Button>
          <Button className={styles.gitLoginBtn} alwaysActive>
            <i className={classnames('fa fa-github-alt', styles.subMenuOcto)}></i>
            <span className={styles.btnLabel}>With GitHub</span>
          </Button>
        </div>
      );
    }

    return null;
  }

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
        <Button
          alwaysActive
          className={classnames(styles.signInBtn, styles.title)}
          onClick={this.toggleSubMenu}
        >
          Sign Up / Sign In
        </Button>

        {this.renderSubMenu()}
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
