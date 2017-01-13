import React, { Component } from 'react';
import ClassNames from 'classnames';
import _ from 'lodash';
import { Link, IndexLink } from 'react-router';
import styles from './styles';

class NavigationBar extends Component {
  render() {
    const {
      navigationLinks,
    } = this.props;

    return (
      <ul className={styles.navigationBar}>
        <li key={_.uniqueId('navLink_')}>
          <IndexLink
            className={styles.links}
            activeClassName={styles.linkActive}
            to='/'
          >
            Home
          </IndexLink>
        </li>

        {navigationLinks.map(link =>
          <li key={_.uniqueId('navLink_')}>
            <Link
              className={styles.links}
              activeClassName={styles.linkActive}
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

NavigationBar.defaultProps = {
  navigationLinks: [],
};

NavigationBar.propTypes = {
  navigationLinks: React.PropTypes.array.isRequired,
};

export default NavigationBar;
