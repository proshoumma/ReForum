import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import Tag from 'Components/Tag';

class DiscussionBox extends Component {
  render() {
    const {
      voteCount,
      userName,
      userGitHandler,
      discussionTitle,
      time,
      opinionCount,
    } = this.props;

    const timeDisplay = time.from(Moment());

    return (
      <div className={styles.container}>
        <div className={styles.title}><Link to="/">{discussionTitle}</Link></div>

        <div className={styles.posterInfo}>
          <span className={styles.name}>{userName}</span>
          <a target="_blank" href={`https://www.github.com/${userGitHandler}`} className={styles.gitHandler}>
            - <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i> {userGitHandler}
          </a>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            {/* <div className={styles.tag}>react</div>
            <div className={styles.tag}>redux</div>
            <div className={styles.tag}>nodejs</div> */}
            <Tag name="react" />
            <Tag name="redux" />
            <Tag name="nodejs" />
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{timeDisplay}</span>
            <span className={styles.info}>{voteCount} favorites</span>
            <span className={styles.info}>{opinionCount} opinions</span>
          </div>
        </div>
      </div>
    );
  }
}

DiscussionBox.defaultProps = {
  discussionId: 1,
  voteCount: 20,
  userName: 'Hello World',
  userGitHandler: 'github',
  discussionTitle: 'This is a default post title',
  time: Moment(),
  opinionCount: 12,
};

DiscussionBox.propTypes = {
  discussionId: React.PropTypes.number,
  voteCount: React.PropTypes.number,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  discussionTitle: React.PropTypes.string,
  time: React.PropTypes.object,
  opinionCount: React.PropTypes.number,
};

export default DiscussionBox;
