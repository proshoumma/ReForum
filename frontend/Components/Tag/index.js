import React, { Component } from 'react';
import styles from './styles';

class Tag extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className={styles.tag}>
        {name}
      </div>
    );
  }
}

Tag.defaultProps = {
  name: '',
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Tag;
