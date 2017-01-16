import React, { Component } from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';
import Moment from 'moment';
import styles from './styles';

class PostBox extends Component {
  render() {
    const {
      voteCount,
      posterName,
      posterGitHandler,
      postTitle,
      time,
      commentCount,
    } = this.props;

    const timeDisplay = time.from(Moment());

    return (
      <div className={styles.container}>
        <div className={styles.postTitle}><Link to="/">{postTitle}</Link></div>

        <div className={styles.posterInfo}>
          <span className={styles.name}>{posterName}</span>
          <a target="_blank" href={`https://www.github.com/${posterGitHandler}`} className={styles.gitHandler}>
            - <i className={ClassNames('fa fa-github-alt', styles.gitIcon)}></i> {posterGitHandler}
          </a>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            <div className={styles.tag}>react</div>
            <div className={styles.tag}>redux</div>
            <div className={styles.tag}>nodejs</div>
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{timeDisplay}</span>
            <span className={styles.info}>{voteCount} favorites</span>
            <span className={styles.info}>{commentCount} comments</span>
          </div>
        </div>
      </div>
    );
  }
}

PostBox.defaultProps = {
  postId: 1,
  voteCount: 20,
  posterName: 'Hello World',
  posterGitHandler: 'github',
  postTitle: 'This is a default post title',
  time: Moment(),
  commentCount: 12,
};

PostBox.propTypes = {
  postId: React.PropTypes.number,
  voteCount: React.PropTypes.number,
  posterName: React.PropTypes.string,
  posterGitHandler: React.PropTypes.string,
  postTitle: React.PropTypes.string,
  time: React.PropTypes.object,
  commentCount: React.PropTypes.number,
};

export default PostBox;
