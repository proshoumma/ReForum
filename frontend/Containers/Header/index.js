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
  renderNavLinks() {
    if (this.props.forums) {
      return this.props.forums.map((forum) => {
        return {
          id: forum.forum_id,
          name: forum.forum_name,
          link: `/${forum.forum_slug}`,
        };
      });
    }

    return null;
  }

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
          navigationLinks={this.renderNavLinks()}
        />
      </div>
    );
  }
}

Header.defaultProps = {
  forums: [
    {
      'forum_id': 0,
      'forum_slug': 'general',
      'forum_name': 'General',
    },
  ],
};

Header.propTypes = {
  forums: React.PropTypes.array, // array of forum objects from backend
};

export default Header;
