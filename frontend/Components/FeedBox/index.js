import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import DiscussionBox from './DiscussionBox';

class FeedBox extends Component {
  renderSort() {
    // TODO: create sorting logic
    // if (this.props.type === 'general') {
    //   return (
    //     <div className={styles.sortList}>
    //       <span className={classnames(styles.sort, styles.sortActive)}>Latest</span>
    //       <span className={styles.sort}>Popular</span>
    //     </div>
    //   );
    // }
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
      currentForum,
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
                key={discussion._id}
                userName={discussion.user.name}
                userGitHandler={discussion.user.username}
                discussionTitle={discussion.title}
                time={discussion.date}
                tags={discussion.tags}
                opinionCount={discussion.opinion_count}
                voteCount={discussion.favorites.length}
                link={`${currentForum}/discussion/${discussion.discussion_slug}`}
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
  currentForum: 'general',
};

FeedBox.propTypes = {
  type: React.PropTypes.oneOf(['general', 'pinned']),
  loading: React.PropTypes.bool,
  discussions: React.PropTypes.array,
  currentForum: React.PropTypes.string,
};

export default FeedBox;
