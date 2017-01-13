import React, { Component } from 'react';
import classnames from 'classnames';

import FeedBox from 'Containers/FeedBox';
import SideBar from 'Containers/SideBar';

import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

class ForumFeed extends Component {
  render() {
    const currentForum = this.props.params.forum || 'home';

    return (
      <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
        <div className={appLayout.primaryContent}>
          <FeedBox currentForum={currentForum} />
        </div>
        <div className={appLayout.secondaryContent}>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default ForumFeed;
