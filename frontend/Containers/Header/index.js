import React, { Component } from 'react';
import appLayout from 'SharedStyles/appLayout';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div className={appLayout.constraintWidth}>
        Header
      </div>
    );
  }
}

export default Header;
