import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Tag from 'Components/Tag';

class Discussion extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userGitHandler,
      discTitle,
      discDate,
      discContent,
      tags,
      favoriteCount,
    } = this.props;

    let favCount = '';
    if (favoriteCount === 0) favCount = 'Make favorite';
    else if (favoriteCount === 1) favCount = '1 favorite';
    else favCount = `${favoriteCount} favorites`;

    return (
      <div className={styles.container}>

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
            <div className={styles.dateInfo}>{discDate}</div>
          </div>
        </div>

        <div className={styles.discTitle}>{discTitle}</div>
        <div className={styles.discContent}>
          {discContent}
        </div>

        <div className={styles.postFooter}>
          <div className={styles.tags}>
            { tags.map(tag => <Tag name={tag} key={_.uniqueId('tag_')} />)}
          </div>
          <div className={styles.favoriteButton}>
            <i className={classnames('fa fa-heart-o')}></i>
            <div>{favCount}</div>
          </div>
        </div>
      </div>
    );
  }
}

Discussion.defaultProps = {
  userAvatar: PlaceholderImage,
  userName: 'User name',
  userGitHandler: 'github',
  discTitle: 'Default Discussion Title',
  discDate: 'a day ago',
  discContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  tags: [ 'react', 'redux', 'webkit' ],
  favoriteCount: 1,
};

Discussion.propTypes = {
  userAvatar: React.PropTypes.string,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  discTitle: React.PropTypes.string,
  discDate: React.PropTypes.string,
  discContent: React.PropTypes.string,
  tags: React.PropTypes.array,
  favoriteCount: React.PropTypes.number,
};

export default Discussion;
