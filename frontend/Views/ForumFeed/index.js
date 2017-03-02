import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { getDiscussions } from './actions';

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
    } = this.props;

    const forumId = _.find(forums, { forum_slug: currentForum }).forum_id;
    getDiscussions(forumId);
  }

  componentDidUpdate(prevProps) {
    const {
      forums,
      currentForum,
      getDiscussions,
    } = this.props;

    if (prevProps.currentForum !== currentForum) {
      const forumId = _.find(forums, { forum_slug: currentForum }).forum_id;
      getDiscussions(forumId);
    }
  }

  render() {
    const {
      discussions,
      fetchingDiscussions,
    } = this.props;

    return (
      <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
        <div className={appLayout.primaryContent}>
          <FeedBox type='pinned' />
          <FeedBox type='general' loading={fetchingDiscussions} discussions={discussions} />
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
  }; },
  (dispatch) => { return { getDiscussions: (forumId) => { dispatch(getDiscussions(forumId)); } }; }
)(ForumFeed);
