import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

import Button from 'Components/Button';

class Tag extends Component {
  render() {
    const {
      name,
      withRemove,
      removeAction,
    } = this.props;

    return (
      <div className={classnames(styles.tag, withRemove && styles.tagWithRemove)}>
        {name}
        { withRemove &&
          <Button
            onClick={removeAction}
            className={styles.removeButton}
          >
            <i className={'fa fa-close'}></i>
          </Button>
        }
      </div>
    );
  }
}

Tag.defaultProps = {
  name: '',
  withRemove: false,
  removeAction: () => {},
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired,
  withRemove: React.PropTypes.bool,
  removeAction: React.PropTypes.func,
};

export default Tag;
