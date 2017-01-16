import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

import Post from 'Components/SinglePost/Post';

class SinglePost extends Component {
  render() {
    return (
      <div className={appLayout.constraintWidth}>
        <Post />
      </div>
    );
  }
}

export default SinglePost;
