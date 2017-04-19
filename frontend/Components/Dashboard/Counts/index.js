import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

class Counts extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.count}>12</div>
        <div className={styles.label}>Posts</div>
      </div>
    );
  }
}

Counts.defaultProps = {
};

Counts.propTypes = {
};

export default Counts;
