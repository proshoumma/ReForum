import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

class Button extends Component {
  render() {
    const {
      type,
      fullWidth,
      noUppercase,
      className,
      style,
      onClick,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={classnames(
          styles.button,
          styles.buttonDefaults,
          styles[type],
          fullWidth && styles.fullWidth,
          noUppercase && styles.noUppercase,
          className
        )}
        style={style}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'default',
  fullWidth: false,
  noUppercase: false,
  className: '',
  style: {},
  onClick: () => { console.log('clicked!'); },
};

Button.propTypes = {
  type: React.PropTypes.string,
  fullWidth: React.PropTypes.bool,
  noUppercase: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default Button;
