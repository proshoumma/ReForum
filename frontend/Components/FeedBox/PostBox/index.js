import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles';

class PostBox extends Component {
  render() {
    const {
      voteCount,
      posterName,
      posterDesignation,
      postTitle,
      time,
      commentCount,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.postTitle}><Link to="/">{postTitle}</Link></div>

        <div className={styles.posterInfo}>
          <span className={styles.name}>{posterName}</span>
          <span className={styles.designation}> - {posterDesignation}</span>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            <div className={styles.tag}>react</div>
            <div className={styles.tag}>redux</div>
            <div className={styles.tag}>nodejs</div>
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{time}</span>
            <span className={styles.info}>{voteCount} favorites</span>
            <span className={styles.info}>{commentCount} comments</span>
          </div>
        </div>

      </div>
    );
  }
}

PostBox.defaultProps = {
  voteCount: 20,
  posterName: 'Hello World',
  posterDesignation: 'Software Engineer @ ReForum',
  postTitle: 'Great Forum! Welcome home... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  time: '23 Hours Ago',
  commentCount: 12,
};

PostBox.propTypes = {
  voteCount: React.PropTypes.number,
  posterName: React.PropTypes.string,
  posterDesignation: React.PropTypes.string,
  postTitle: React.PropTypes.string,
  time: React.PropTypes.string,
  commentCount: React.PropTypes.number,
};

export default PostBox;
