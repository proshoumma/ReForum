import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import PostBox from './PostBox';

class FeedBox extends Component {
  renderSort() {
    if (this.props.type === 'posts') {
      return (
        <div className={styles.sortList}>
          <span className={classnames(styles.sort, styles.sortActive)}>Latest</span>
          <span className={styles.sort}>Popular</span>
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      type,
      posts,
    } = this.props;

    let postBoxTitle = '';
    if (type === 'posts') postBoxTitle = 'Posts';
    if (type === 'pinned') postBoxTitle = 'Pinned Posts';

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{postBoxTitle}</span>
          { this.renderSort() }
        </div>
        <div className={styles.posts}>
          { posts.map((post) =>
            <PostBox
              key={post.postId}
              voteCount={post.voteCount}
              posterName={post.posterName}
              posterGitHandler={post.posterGitHandler}
              postTitle={post.postTitle}
              time={post.time}
              commentCount={post.commentCount}
            />
          ) }
        </div>
      </div>
    );
  }
}

FeedBox.defaultProps = {
  type: 'posts',
  posts: [
    {
      postId: 1,
      voteCount: 1,
      posterName: 'Hello World',
      posterGitHandler: 'github',
      postTitle: 'This is a default post title',
      time: Moment(),
      commentCount: 12,
    },
  ],
};

FeedBox.propTypes = {
  type: React.PropTypes.oneOf(['posts', 'pinned']),
  posts: React.PropTypes.array,
};

export default FeedBox;
