import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
  getDiscussions,
  getPinnedDiscussions,
} from './actions';

import FeedBox from 'Components/FeedBox';
import SideBar from 'Components/SideBar';

import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

class ForumFeed extends Component {
  componentDidMount() {
    const {
      forums,
      currentForum,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    const forumId = _.find(forums, { forum_slug: currentForum }).forum_id;
    getDiscussions(forumId);
    getPinnedDiscussions(forumId);
  }

  componentDidUpdate(prevProps) {
    const {
      forums,
      currentForum,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    if (prevProps.currentForum !== currentForum) {
      const forumId = _.find(forums, { forum_slug: currentForum }).forum_id;
      getDiscussions(forumId);
      getPinnedDiscussions(forumId);
    }
  }

  render() {
    const {
      currentForum,
      discussions,
      fetchingDiscussions,
      pinnedDiscussions,
      fetchingPinnedDiscussions,
    } = this.props;

    return (
      <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
        <div className={appLayout.primaryContent}>
          <FeedBox
            type='pinned'
            loading={fetchingPinnedDiscussions}
            discussions={pinnedDiscussions}
            currentForum={currentForum}
          />
          <FeedBox
            type='general'
            loading={fetchingDiscussions}
            discussions={discussions}
            currentForum={currentForum}
          />
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
    forums: state.app.forums,
    currentForum: state.app.currentForum,
    fetchingDiscussions: state.feed.fetchingDiscussions,
    discussions: state.feed.discussions,
    fetchingPinnedDiscussions: state.feed.fetchingPinnedDiscussions,
    pinnedDiscussions: state.feed.pinnedDiscussions,
  }; },
  (dispatch) => { return {
    getDiscussions: (forumId) => { dispatch(getDiscussions(forumId)); },
    getPinnedDiscussions: (forumId) => { dispatch(getPinnedDiscussions(forumId)); },
  }; }
)(ForumFeed);
