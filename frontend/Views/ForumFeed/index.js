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
      currentForum,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    getDiscussions(currentForum);
    getPinnedDiscussions(currentForum);
  }

  componentDidUpdate(prevProps) {
    const {
      currentForum,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    if (prevProps.currentForum !== currentForum) {
      const feedChanged = true;
      getDiscussions(currentForum, feedChanged);
      getPinnedDiscussions(currentForum, feedChanged);
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
    currentForum: state.app.currentForum,
    fetchingDiscussions: state.feed.fetchingDiscussions,
    discussions: state.feed.discussions,
    fetchingPinnedDiscussions: state.feed.fetchingPinnedDiscussions,
    pinnedDiscussions: state.feed.pinnedDiscussions,
  }; },
  (dispatch) => { return {
    getDiscussions: (currentForum, feedChanged) => { dispatch(getDiscussions(currentForum, feedChanged)); },
    getPinnedDiscussions: (currentForum, feedChanged) => { dispatch(getPinnedDiscussions(currentForum, feedChanged)); },
  }; }
)(ForumFeed);
