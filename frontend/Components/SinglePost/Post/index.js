import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Tag from 'Components/Tag';

class Post extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.postTitle}>Hello World lorem</div>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={PlaceholderImage} />
          <div className={styles.columnOnSmallBP}>
            <div className={styles.userInfo}>
              <div className={styles.name}>Hello World</div>
              <a href="https://www.github.com/github" target="_blank" className={styles.gitHandler}>
                <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
                <span>helloworld</span>
              </a>
            </div>
            <div className={styles.dateInfo}>Posted a day ago</div>
          </div>
        </div>

        <div className={styles.postContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div className={styles.postFooter}>
          <div className={styles.tags}>
            <Tag name="react" />
            <Tag name="redux" />
            <Tag name="webkit" />
          </div>
          <div className={styles.favoriteButton}>
            <i className={classnames('fa fa-heart-o')}></i>
            <div>1 favorites</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
