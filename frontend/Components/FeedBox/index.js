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

  renderEmptyDiscussionLine(loading, discussions) {
    if (!loading) {
      if (!discussions || discussions.length === 0) {
        return <div className={styles.loading}>No discussions...</div>;
      }
    }
  }

  render() {
    const {
      type,
      loading,
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
        { loading && <div className={styles.loading}>Loading...</div> }
        { this.renderEmptyDiscussionLine(loading, discussions) }
        { !loading &&
          <div className={styles.discussions}>
            { discussions && discussions.map((discussion) =>
              <DiscussionBox
                key={discussion.discussion_id}
                voteCount={discussion.favorite_count}
                userName={discussion.user.name}
                userGitHandler={discussion.user.username}
                discussionTitle={discussion.title}
                time={discussion.date}
                opinionCount={discussion.opinion_count}
              />
            ) }
          </div>
        }
      </div>
    );
  }
}

FeedBox.defaultProps = {
  type: 'general',
  loading: false,
  discussions: [],
};

FeedBox.propTypes = {
  type: React.PropTypes.oneOf(['general', 'pinned']),
  loading: React.PropTypes.bool,
  discussions: React.PropTypes.array,
};

export default FeedBox;
