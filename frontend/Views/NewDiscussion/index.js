import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

import RichEditor from 'Components/RichEditor';

class NewDiscussion extends Component {
  render() {
    const currentForum = 'react';

    return (
      <div className={classnames(appLayout.constraintWidth, styles.content)}>
        <div className={styles.forumInfo}>
          You are posting a new discussion on <span className={styles.forumName}>{currentForum}</span> forum.
        </div>
        <input type="text" className={styles.titleInput} placeholder={'Discussion title...'} />
        <RichEditor type='newDiscussion' />
      </div>
    );
  }
}

export default NewDiscussion;
