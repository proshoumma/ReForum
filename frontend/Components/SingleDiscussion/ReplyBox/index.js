import React, { Component } from 'react';
import styles from './styles.css';

import RichEditor from 'Components/RichEditor';

class ReplyBox extends Component {
  render() {
    return (
      <RichEditor type="newOpinion" />
    );
  }
}

ReplyBox.defaultProps = {
};

ReplyBox.propTypes = {
};

export default ReplyBox;
