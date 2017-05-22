import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = `${styles.controlButton}`;
    if (this.props.active) {
      className += ` ${styles.controlButtonActive}`;
    }

    return (
      <div className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </div>
    );
  }
}

StyleButton.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  active: React.PropTypes.any.isRequired,
  label: React.PropTypes.string.isRequired,
  style: React.PropTypes.string.isRequired,
};

export default StyleButton;
