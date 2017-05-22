import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

import Button from 'Components/Button';
import StyleButton from './StyleButton';

class BlockStyleControls extends Component {
  render() {
    const {
      onToggle,
      editorState,
      type,
    } = this.props;

    const blockTypes = [
      // {label: 'H1', style: 'header-one'},
      // {label: 'H2', style: 'header-two'},
      {label: 'H3', style: 'header-three'},
      {label: 'H4', style: 'header-four'},
      {label: 'H5', style: 'header-five'},
      // {label: 'H6', style: 'header-six'},
      {label: 'Blockquote', style: 'blockquote'},
      // {label: 'UL', style: 'unordered-list-item'},
      // {label: 'OL', style: 'ordered-list-item'},
      {label: 'Code Block', style: 'code-block'},
    ];

    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div className={styles.controls}>
        { blockTypes.map((eachType) =>
          <StyleButton
            key={eachType.label}
            onToggle={onToggle}
            active={eachType.style === blockType}
            label={eachType.label}
            style={eachType.style}
          />
        ) }
      </div>
    );
  }
}

BlockStyleControls.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  editorState: React.PropTypes.any.isRequired,
  type: React.PropTypes.oneOf(['newDiscussion', 'newOpinion']),
};

export default BlockStyleControls;
