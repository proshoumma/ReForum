import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
import classnames from 'classnames';
import styles from './styles.css';

import Button from 'Components/Button';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.focus = () => this.refs.commentEditor.focus();
    this.onChange = (editorState) => this.setState({editorState});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.editorContainer} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder={'Your comment...'}
            ref='commentEditor'
          />
        </div>

        <Button style={{ }}>
          Reply
        </Button>
      </div>
    );
  }
}

CommentBox.defaultProps = {
};

CommentBox.propTypes = {
};

export default CommentBox;
