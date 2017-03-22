import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

import Button from 'Components/Button';

class PinButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
  }

  updateValue(value) {
    this.props.onChange(value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.label}>Is it a pinned discussion?</div>

        <div className={styles.btnContainer}>
          <Button
            alwaysActive={value ? true : false}
            onClick={() => { this.updateValue(true); }}
          >
            Yes
          </Button>

          <Button
            alwaysActive={!value ? true : false}
            onClick={() => { this.updateValue(false); }}
          >
            No
          </Button>
        </div>

      </div>
    );
  }
}

PinButton.defaultProps = {
  onChange: (val) => { console.log('Pin value: ' + val); },
};

PinButton.propTypes = {
  onChange: React.PropTypes.func,
};

export default PinButton;
