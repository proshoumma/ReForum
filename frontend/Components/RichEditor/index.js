import React, { Component } from 'react';
import { Editor, EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
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

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      const contentState = convertFromRaw(JSON.parse(value));
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  }

  onEditorStateChange(editorState) {
    const { onChange } = this.props;
    this.setState({ editorState });

    // trigger on change converting the ContentState to raw object
    onChange(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  }

  render() {
    const {
      type,
      onSave,
      readOnly,
    } = this.props;

    let saveButtonLabel = '';
    if (type === 'newOpinion') saveButtonLabel = 'Reply';
    if (type === 'newDiscussion') saveButtonLabel = 'Post Discussion';

    let placeholder = '';
    if (type === 'newOpinion') placeholder = 'Your opinion...';
    if (type === 'newDiscussion') placeholder = 'Discussion summary...';

    return (
      <div className={classnames(styles.container, readOnly && styles.readOnlyContainer)}>
        <div
          className={classnames(
            styles.editorContainer,
            !readOnly && styles[type],
            readOnly && styles.readOnlyEditorContainer
          )}
          onClick={this.focus}
        >
          <Editor
            readOnly={readOnly}
            editorState={this.state.editorState}
            onChange={this.onEditorStateChange}
            placeholder={placeholder}
            ref='commentEditor'
          />
        </div>

        { !readOnly && <Button noUppercase style={{ alignSelf: 'center' }} onClick={onSave}>
          {saveButtonLabel}
        </Button> }
      </div>
    );
  }
}

RichEditor.defaultProps = {
  readOnly: false,
  value: null,
  type: 'newDiscussion',
  onChange: () => { },
  onSave: () => { },
};

RichEditor.propTypes = {
  readOnly: React.PropTypes.bool,
  value: React.PropTypes.any,
  type: React.PropTypes.oneOf(['newDiscussion', 'newOpinion']),
  onChange: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

export default RichEditor;
