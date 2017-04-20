import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

class Counts extends Component {
  render() {
    const {
      count,
      label,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.count}>{count}</div>
        <div className={styles.label}>{label}</div>
      </div>
    );
  }
}

Counts.defaultProps = {
  count: 0,
  label: 'default',
};

Counts.propTypes = {
  count: React.PropTypes.number,
  label: React.PropTypes.string,
};

export default Counts;
