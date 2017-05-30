import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import {
  getAdminDashboardInfo,
  getForums,
  createForum,
  deleteForum,
} from './actions';
import Counts from 'Components/Dashboard/Counts';
import ForumBox from 'Components/Dashboard/ForumBox';

class Dashboard extends Component {
  componentDidMount() {
    // get information needed for dashboard
    this.props.getAdminDashboardInfo();

    // get the forum list
    this.props.getForums();
  }

  render() {
    if (this.props.adminInfo.info) {
      const {
        discussionCount,
        opinionCount,
        forumCount,
        userCount,
        forums,
      } = this.props.adminInfo.info;

      const forumsArray = forums.map((forum) => {
        return { id: forum._id, name: forum.forum_name, slug: forum.forum_slug };
      });

      return (
        <div className={classnames(appLayout.constraintWidth, styles.container)}>
          <div className={styles.countsContainer}>
            <Counts label={'Users'} count={userCount} />
            <Counts label={'Discussions'} count={discussionCount} />
            <Counts label={'Opinions'} count={opinionCount} />
            <Counts label={'Forums'} count={forumCount} />
          </div>

          <ForumBox
            forums={forumsArray}
            deleteAction={(forumId) => { this.props.deleteForum(forumId); }}
            createAction={(forumObj) => { this.props.createForum(forumObj); }}
          />
        </div>
      );
    }

    return (
      <div className={classnames(appLayout.constraintWidth, styles.loadingMsg)}>
        Loading dashboard info...
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    adminInfo: state.adminInfo,
    creatingForum: state.adminInfo.creatingForum,
    deletingForum: state.adminInfo.deletingForum,
  }; },
  (dispatch) => { return {
    getAdminDashboardInfo: () => { dispatch(getAdminDashboardInfo()); },
    getForums: () => { dispatch(getForums()); },
    deleteForum: (forumId) => { dispatch(deleteForum(forumId)); },
    createForum: (forumObj) => { dispatch(createForum(forumObj)); },
  }; }
)(Dashboard);
