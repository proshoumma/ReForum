import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import DiscussionBox from './DiscussionBox';

class FeedBox extends Component {
  renderSort() {
    if (this.props.type === 'general') {
      return (
        <div className={styles.sortList}>
          <span className={classnames(styles.sort, styles.sortActive)}>Latest</span>
          <span className={styles.sort}>Popular</span>
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      type,
      discussions,
    } = this.props;

    let discussionBoxTitle = '';
    if (type === 'general') discussionBoxTitle = 'Discussions';
    if (type === 'pinned') discussionBoxTitle = 'Pinned';

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{discussionBoxTitle}</span>
          { this.renderSort() }
        </div>
        <div className={styles.discussions}>
          { discussions.map((discussion) =>
            <DiscussionBox
              key={discussion.discussionId}
              voteCount={discussion.voteCount}
              userName={discussion.userName}
              userGitHandler={discussion.userGitHandler}
              discussionTitle={discussion.postTitle}
              time={discussion.time}
              opinionCount={discussion.commentCount}
            />
          ) }
        </div>
      </div>
    );
  }
}

FeedBox.defaultProps = {
  type: 'general',
  discussions: [
    {
      discussionId: 1,
      voteCount: 1,
      userName: 'Hello World',
      userGitHandler: 'github',
      discussionTitle: 'This is a default discussion title',
      time: Moment(),
      commentCount: 12,
    },
  ],
};

FeedBox.propTypes = {
  type: React.PropTypes.oneOf(['general', 'pinned']),
  discussions: React.PropTypes.array,
};

export default FeedBox;
