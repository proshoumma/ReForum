import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
import classnames from 'classnames';
import styles from './styles';

import Button from 'Components/Button';

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.focus = () => this.refs.commentEditor.focus();
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    const { onChange } = this.props;

    this.setState({ editorState });
    onChange(editorState.getCurrentContent().getPlainText());
  }

  render() {
    const {
      type,
      onSave,
    } = this.props;

    let saveButtonLabel = '';
    if (type === 'newOpinion') saveButtonLabel = 'Reply';
    if (type === 'newDiscussion') saveButtonLabel = 'Post Discussion';

    let placeholder = '';
    if (type === 'newOpinion') placeholder = 'Your opinion...';
    if (type === 'newDiscussion') placeholder = 'Discussion summary...';

    return (
      <div className={styles.container}>
        <div className={classnames(styles.editorContainer, styles[type])} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onEditorStateChange}
            placeholder={placeholder}
            ref='commentEditor'
          />
        </div>

        <Button noUppercase style={{ alignSelf: 'center' }} onClick={onSave}>
          {saveButtonLabel}
        </Button>
      </div>
    );
  }
}

RichEditor.defaultProps = {
  type: 'newDiscussion',
  onChange: () => { },
  onSave: () => { },
};

RichEditor.propTypes = {
  type: React.PropTypes.oneOf(['newDiscussion', 'newOpinion']),
  onChange: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

export default RichEditor;
