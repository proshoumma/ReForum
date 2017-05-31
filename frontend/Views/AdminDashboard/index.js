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
  }

  render() {
    const {
      discussionCount,
      opinionCount,
      forumCount,
      userCount,
      forums,
    } = this.props.adminInfo.info;

    const {
      loadingInfo,
      creatingForum,
      creatingForumError,
      deletingForum,
      deletingForumError,
    } = this.props;

    const forumsArray = forums.map((forum) => {
      return { id: forum._id, name: forum.forum_name, slug: forum.forum_slug };
    });

    return (
      <div className={classnames(appLayout.constraintWidth, styles.container)}>
        { loadingInfo && <div className={classnames(styles.loadingMsg)}>
          Loading dashboard info...
        </div> }

        <div className={styles.countsContainer}>
          <Counts label={'Users'} count={userCount} />
          <Counts label={'Discussions'} count={discussionCount} />
          <Counts label={'Opinions'} count={opinionCount} />
          <Counts label={'Forums'} count={forumCount} />
        </div>

        <ForumBox
          forums={forumsArray}
          deletingForum={deletingForum}
          deleteAction={(forumId) => { this.props.deleteForum(forumId); }}
          creatingForum={creatingForum}
          createAction={(forumObj) => { this.props.createForum(forumObj); }}
        />

        { creatingForumError && <div className={styles.errorMsg}>{creatingForumError}</div> }
        { deletingForumError && <div className={styles.errorMsg}>{deletingForumError}</div> }
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    adminInfo: state.adminInfo,
    loadingInfo: state.adminInfo.loadingInfo,
    creatingForum: state.adminInfo.creatingForum,
    creatingForumError: state.adminInfo.creatingForumError,
    deletingForum: state.adminInfo.deletingForum,
    deletingForumError: state.adminInfo.deletingForumError,
  }; },
  (dispatch) => { return {
    getAdminDashboardInfo: () => { dispatch(getAdminDashboardInfo()); },
    getForums: () => { dispatch(getForums()); },
    deleteForum: (forumId) => { dispatch(deleteForum(forumId)); },
    createForum: (forumObj) => { dispatch(createForum(forumObj)); },
  }; }
)(Dashboard);
