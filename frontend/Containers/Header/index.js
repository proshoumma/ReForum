import React, { Component } from 'react';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout';
import styles from './styles';

/* Header components */
import UserMenu from 'Components/Header/UserMenu';
import Logo from 'Components/Header/Logo';
import NavigationBar from 'Components/Header/NavigationBar';
import PlaceholderImage from 'SharedStyles/placeholder.jpg';

class Header extends Component {
  render() {
    return (
      <div className={classnames(appLayout.constraintWidth)}>
        <div className={styles.headerTop}>
          <Logo />
          <UserMenu
            loggedIn={false}
            userName={'Hello World'}
            avatar={PlaceholderImage}
          />
        </div>
        <NavigationBar
          navigationLinks={[
            { name: 'React', link: '/react' },
            { name: 'Redux', link: '/redux' },
            { name: 'Webpack', link: '/webpack' },
            { name: 'Express', link: '/express' },
            { name: 'MongoDB', link: '/mongodb' },
          ]}
        />
      </div>
    );
  }
}

export default Header;
