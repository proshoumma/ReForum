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
      alwaysActive,
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
          alwaysActive && styles.alwaysActive,
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
  alwaysActive: false,
  className: '',
  style: {},
  onClick: () => { },
};

Button.propTypes = {
  type: React.PropTypes.oneOf(['default', 'outline']),
  fullWidth: React.PropTypes.bool,
  noUppercase: React.PropTypes.bool,
  alwaysActive: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default Button;
