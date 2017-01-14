import React, { Component } from 'react';
import ClassNames from 'classnames';
import styles from './styles';

import PostBox from './PostBox';

class FeedBox extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Posts</span>
          <div className={styles.sortList}>
            <span className={ClassNames(styles.sort, styles.sortActive)}>Latest</span>
            <span className={styles.sort}>Popular</span>
          </div>
        </div>
        <div className={styles.posts}>
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
        </div>
      </div>
    );
  }
}

FeedBox.defaultProps = {
  currentForum: 'home',
};

FeedBox.propTypes = {
  currentForum: React.PropTypes.string,
};

export default FeedBox;
