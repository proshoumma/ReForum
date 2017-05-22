import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

import Button from 'Components/Button';
import StyleButton from './StyleButton';

class InlineStyleControls extends Component {
  render() {
    const {
      onToggle,
      editorState,
    } = this.props;

    const inlineStyles = [
      {label: 'Bold', style: 'BOLD'},
      {label: 'Italic', style: 'ITALIC'},
      // {label: 'Underline', style: 'UNDERLINE'},
      {label: 'Monospace', style: 'CODE'},
    ];

    const currentStyle = editorState.getCurrentInlineStyle();

    return (
      <div className={styles.controls}>
        { inlineStyles.map((eachType) =>
          <StyleButton
            key={eachType.label}
            onToggle={onToggle}
            active={currentStyle.has(eachType.style)}
            label={eachType.label}
            style={eachType.style}
          />
        ) }
      </div>
    );
  }
}

InlineStyleControls.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.any.isRequired,
  type: React.PropTypes.oneOf(['newDiscussion', 'newOpinion']),
};

export default InlineStyleControls;
