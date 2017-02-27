import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { getFeeds } from './actions';

import FeedBox from 'Components/FeedBox';
import SideBar from 'Components/SideBar';

import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

class ForumFeed extends Component {
  constructor(props) {
    super(props);

    this.state = { currentForum: null };
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
        <div className={appLayout.primaryContent}>
          <FeedBox type='pinned' />
          <FeedBox type='general' />
        </div>
        <div className={appLayout.secondaryContent}>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    fetchingFeed: state.feed.fetchingFeed,
    currentForum: state.app.currentForum,
    forums: state.app.forums,
  }; },
  (dispatch) => { return { getFeeds: (forumId) => { dispatch(getFeeds(forumId)); } }; }
)(ForumFeed);
