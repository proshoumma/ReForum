import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import classnames from 'classnames';

import RichEditor from 'Components/RichEditor';
import PinButton from 'Components/NewDiscussion/PinButton';
import TagsInput from 'Components/NewDiscussion/TagsInput';

import {
  postDiscussion,
  updateDiscussionTitle,
  updateDiscussionContent,
  updateDiscussionPinStatus,
  updateDiscussionTags,
} from './actions';

import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

class NewDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forumId: null,
      userId: null,
    };
  }

  componentDidMount() {
    const {
      user,
      currentForum,
      forums,
    } = this.props;

    this.setUserAndForumID(user, forums, currentForum);
  }

  componentWillReceiveProps(nextProps) {
    const {
      user,
      currentForum,
      forums,
    } = nextProps;

    this.setUserAndForumID(user, forums, currentForum);
  }

  setUserAndForumID(user, forums, currentForum) {
    const currentForumId = _.find(forums, { forum_slug: currentForum })._id;
    this.setState({
      forumId: currentForumId,
      userId: user._id,
    });
  }

  renderEditor() {
    const { authenticated } = this.props.user;

    const {
      updateDiscussionTitle,
      updateDiscussionContent,
      updateDiscussionPinStatus,
      updateDiscussionTags,
      postDiscussion,
    } = this.props;

    const {
      title,
      content,
      tags,
      pinned,
    } = this.props.newDiscussion;

    const {
      forumId,
      userId,
    } = this.state;

    // only show the editor when user is authenticated
    if (authenticated) {
      return [
        <input
          key={'title'}
          type="text"
          className={styles.titleInput}
          placeholder={'Discussion title...'}
          value={title}
          onChange={(event) => { updateDiscussionTitle(event.target.value); }}
        />,
        <PinButton
          key={'pinned'}
          value={pinned}
          onChange={(value) => { updateDiscussionPinStatus(value); }}
        />,
        <TagsInput
          key={'tags'}
          value={tags}
          onChange={(tags) => { updateDiscussionTags(tags); }}
        />,
        <RichEditor
          key={'content'}
          type='newDiscussion'
          value={content}
          onChange={(value) => { updateDiscussionContent(value); }}
          onSave={() => { postDiscussion(userId, forumId); }}
        />,
      ];
    }

    return (
      <div className={classnames(appLayout.constraintWidth, styles.signInMsg)}>
        Please sign in before posting a new discussion.
      </div>
    );
  }

  render() {
    const { currentForum } = this.props;
    const {
      errorMsg,
      postingSuccess,
      postingDiscussion,
    } = this.props.newDiscussion;

    return (
      <div className={classnames(appLayout.constraintWidth, styles.content)}>
        <div className={styles.forumInfo}>
          You are creating a new discussion on <span className={styles.forumName}>{currentForum}</span> forum.
        </div>
        <div className={styles.errorMsg}>{errorMsg}</div>
        { postingSuccess && <div className={styles.successMsg}>Your discussion is created :-)</div> }
        { this.renderEditor() }
        { postingDiscussion && <div className={styles.postingMsg}>Posting discussion...</div> }
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    user: state.user,
    forums: state.app.forums,
    currentForum: state.app.currentForum,
    newDiscussion: state.newDiscussion,
  }; },
  (dispatch) => { return {
    postDiscussion: (userId, forumId) => { dispatch(postDiscussion(userId, forumId)); },
    updateDiscussionTitle: (value) => { dispatch(updateDiscussionTitle(value)); },
    updateDiscussionContent: (value) => { dispatch(updateDiscussionContent(value)); },
    updateDiscussionPinStatus: (value) => { dispatch(updateDiscussionPinStatus(value)); },
    updateDiscussionTags: (value) => { dispatch(updateDiscussionTags(value)); },
  }; }
)(NewDiscussion);
