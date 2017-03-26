import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {
  getDiscussion,
  toggleFavorite,
  postOpinion,
} from './actions';

import Discussion from 'Components/SingleDiscussion/Discussion';
import ReplyBox from 'Components/SingleDiscussion/ReplyBox';
import Opinion from 'Components/SingleDiscussion/Opinion';

import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

class SingleDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = { opinionContent: '' };
  }

  componentDidMount() {
    const {
      forum,
      discussion,
    } = this.props.params;

    this.props.getDiscussion(discussion);
  }

  userFavoritedDiscussion(userId, favorites) {
    let favorited = false;
    for(let i = 0; i < favorites.length; i++) {
      if (favorites[i] === userId) favorited = true;
    }
    return favorited;
  }

  handleReplySubmit() {
    const {
      postOpinion,
      discussion,
      userId,
    } = this.props;

    postOpinion({
      discussion_id: discussion._id,
      user_id: userId,
      content: this.state.opinionContent,
    });
  }

  render() {
    const {
      userAuthenticated,
      fetchingDiscussion,
      discussion,
      toggleFavorite,
      toggleingFavorite,
      postingOpinion,
      error,
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

    // check if user favorated the discussion
    const userFavorited = this.userFavoritedDiscussion(this.props.userId, favorites);

    return (
      <div className={appLayout.constraintWidth}>
        <Discussion
          id={_id}
          userAvatar={avatarUrl}
          userName={name}
          userGitHandler={username}
          discTitle={title}
          discDate={date}
          discContent={content}
          tags={tags}
          favoriteCount={favorites.length}
          favoriteAction={toggleFavorite}
          userFavorited={userFavorited}
          toggleingFavorite={toggleingFavorite}
        />

        { error && <div className={styles.errorMsg}>{error}</div> }

        { !userAuthenticated && <div className={styles.signInMsg}>Please sign in to post a reply.</div> }
        { userAuthenticated && <ReplyBox
          posting={postingOpinion}
          onSubmit={this.handleReplySubmit.bind(this)}
          onChange={(content) => { this.setState({ opinionContent: content }); }}
        /> }

        { opinions && opinions.map((opinion) => {
          return (
            <Opinion
              key={opinion._id}
              userAvatar={opinion.user.avatarUrl}
              userName={opinion.user.name}
              userGitHandler={opinion.user.username}
              opDate={opinion.date}
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
    userAuthenticated: state.user.authenticated,
    userId: state.user._id,
    fetchingDiscussion: state.discussion.fetchingDiscussion,
    toggleingFavorite: state.discussion.toggleingFavorite,
    postingOpinion: state.discussion.postingOpinion,
    discussion: state.discussion.discussion,
    error: state.discussion.error,
  }; },
  (dispatch) => { return {
    getDiscussion: (discussionSlug) => { dispatch(getDiscussion(discussionSlug)); },
    toggleFavorite: (discussionId) => { dispatch(toggleFavorite(discussionId)); },
    postOpinion: (opinion) => { dispatch(postOpinion(opinion)); },
  }; }
)(SingleDiscussion);
