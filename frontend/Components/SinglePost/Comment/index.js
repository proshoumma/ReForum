import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Button from 'Components/Button';

class Comment extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userGitHandler,
      commentDate,
      commentContent,
      favoriteCount,
      insideLevel,
    } = this.props;

    let favCount = '';

    if (favoriteCount === 0) favCount = 'Make Favorite';
    else if (favoriteCount === 1) favCount = '1 Favorite';
    else favCount = `${favoriteCount} Favorites`;

    return (
      <div className={styles.container} style={{ marginLeft: insideLevel * 42 }}>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={userAvatar} />
          <div className={styles.columnOnSmallBP}>
            <div className={styles.userInfo}>
              <div className={styles.name}>{userName}</div>
              <a href={`https://www.github.com/${userGitHandler}`} target="_blank" className={styles.gitHandler}>
                <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
                <span>{userGitHandler}</span>
              </a>
            </div>
            <div className={styles.dateInfo}>{commentDate}</div>
          </div>
        </div>

        <div className={styles.commentContent}>
          {commentContent}
        </div>

        <div className={styles.commentFooter}>
          <div className={styles.favoriteButton}>
            <i className={classnames('fa fa-heart-o')}></i>
            <div>{favCount}</div>
          </div>

          <Button noUppercase>Reply</Button>
        </div>
      </div>
    );
  }
}

Comment.defaultProps = {
  userAvatar: PlaceholderImage,
  userName: 'User name',
  userGitHandler: 'github',
  commentDate: 'a day ago',
  commentContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  favoriteCount: 0,
  insideLevel: 0,
};

Comment.propTypes = {
  userAvatar: React.PropTypes.string,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  commentDate: React.PropTypes.string,
  commentContent: React.PropTypes.string,
  favoriteCount: React.PropTypes.number,
  insideLevel: React.PropTypes.number,
};

export default Comment;
