import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import moment from 'moment';

import {
  getDiscussion,
  toggleFavorite,
} from './actions';

import Discussion from 'Components/SingleDiscussion/Discussion';
import ReplyBox from 'Components/SingleDiscussion/ReplyBox';
import Opinion from 'Components/SingleDiscussion/Opinion';

import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

class SingleDiscussion extends Component {
  componentDidMount() {
    const {
      forum,
      discussion,
    } = this.props.params;

    this.props.getDiscussion(discussion);
  }

  render() {
    const {
      fetchingDiscussion,
      discussion,
      toggleFavorite,
    } = this.props;

    // return loading status if discussion is not fetched yet
    if (fetchingDiscussion) {
      return <div className={styles.loadingWrapper}>Loading discussion ...</div>;
    }

    const {
      _id,
      content,
      date,
      favorites,
      title,
      tags,
      opinions,
    } = discussion;

    const {
      avatarUrl,
      name,
      username,
    } = discussion.user;

    return (
      <div className={appLayout.constraintWidth}>
        <Discussion
          id={_id}
          userAvatar={avatarUrl}
          userName={name}
          userGitHandler={username}
          discTitle={title}
          discDate={moment(date)}
          discContent={content}
          tags={tags}
          favoriteCount={favorites.length}
          favoriteAction={toggleFavorite}
        />
        <ReplyBox />
        { opinions && opinions.map((opinion) => {
          return (
            <Opinion
              key={opinion._id}
              userAvatar={opinion.user.avatarUrl}
              userName={opinion.user.name}
              userGitHandler={opinion.user.username}
              opDate={moment(opinion.date)}
              opContent={opinion.content}
            />
          );
        }) }
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    fetchingDiscussion: state.discussion.fetchingDiscussion,
    discussion: state.discussion.discussion,
  }; },
  (dispatch) => { return {
    getDiscussion: (discussionSlug) => { dispatch(getDiscussion(discussionSlug)); },
    toggleFavorite: (discussionId) => { dispatch(toggleFavorite(discussionId)); },
  }; }
)(SingleDiscussion);
