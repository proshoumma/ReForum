import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import styles from './styles';

import Button from 'Components/Button';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSubMenu: false };
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  handleClickOutside() {
    this.setState({ activeSubMenu: false });
  }

  toggleSubMenu() {
    this.setState((prevState) => {
      return { activeSubMenu: !prevState.activeSubMenu };
    });
  }

  renderSubMenu() {
    const { activeSubMenu } = this.state;
    const {
      signedIn,
      gitHandler,
    } = this.props;

    if (activeSubMenu) {
      return (
        <div className={styles.subMenu}>
          <Button className={styles.subMenuClose} onClick={this.toggleSubMenu} alwaysActive>
            <i className={classnames('fa fa-close')}></i>
          </Button>

          { !signedIn && <a className={styles.signInLink} href={'/api/user/authViaGitHub'}>
            <Button className={styles.gitLoginBtn} alwaysActive>
              <i className={classnames('fa fa-github-alt', styles.subMenuOcto)}></i>
              <span className={styles.btnLabel}>With GitHub</span>
            </Button>
          </a> }

          { signedIn && <span onClick={this.toggleSubMenu}><Link className={styles.subMenuItem} to={`/user/${gitHandler}`}>My Profile</Link></span> }
          {/* { signedIn && <a className={styles.subMenuItem} href={'#'}>Settings</a> } */}
          { signedIn && <a className={styles.subMenuItem} href={'/api/user/signout'}>Sign Out</a> }
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      signedIn,
      userName,
      avatar,
      signOutAction,
    } = this.props;

    if (signedIn) {
      return (
        <div style={{ position: 'relative' }}>
          <div className={styles.container} onClick={this.toggleSubMenu}>
            <img className={styles.userAvatar} src={avatar} alt={`${userName} Avatar`} />
            <span className={styles.title}>{userName}</span>
          </div>
          {this.renderSubMenu()}
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
  signedIn: false,
  userName: '',
  gitHandler: '',
  avatar: '',
};

UserMenu.propTypes = {
  signedIn: React.PropTypes.bool.isRequired,
  userName: React.PropTypes.string,
  gitHandler: React.PropTypes.string,
  avatar: React.PropTypes.string,
};

export default onClickOutside(UserMenu);
