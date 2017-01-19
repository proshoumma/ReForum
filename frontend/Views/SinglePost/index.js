import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

import Post from 'Components/SinglePost/Post';
import CommentBox from 'Components/SinglePost/CommentBox';
import Comment from 'Components/SinglePost/Comment';

class SinglePost extends Component {
  render() {
    return (
      <div className={appLayout.constraintWidth}>
        <Post />
        <CommentBox />
        <Comment />
        <Comment insideLevel={1} />
        <Comment insideLevel={2} />
        <Comment />
        <Comment insideLevel={1} />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default SinglePost;
