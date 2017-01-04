import React, { Component } from 'react';
import styles from './styles';

import Button from '../../Components/Button';

class Home extends Component {
  renderView() {
    if (this.props.children) return this.props.children;
    return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>Lorem ipsum dolor sit amet.</p>
        {this.renderView()}
        <Button>Hello World</Button>
      </div>
    );
  }
}

export default Home;
