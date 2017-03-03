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
      tags,
      link,
    } = this.props;

    const postTime = Moment(time);
    const timeDisplay = postTime.from(Moment());

    return (
      <div className={styles.container}>
        <div className={styles.title}><Link to={link}>{discussionTitle}</Link></div>

        <div className={styles.posterInfo}>
          <span className={styles.name}>{userName}</span>
          <a target="_blank" href={`https://www.github.com/${userGitHandler}`} className={styles.gitHandler}>
            - <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i> {userGitHandler}
          </a>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            { tags.map((tag) => <Tag key={tag} name={tag} />) }
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
  tags: ['react', 'redux', 'nodejs'],
  link: '',
};

DiscussionBox.propTypes = {
  discussionId: React.PropTypes.number,
  voteCount: React.PropTypes.number,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  discussionTitle: React.PropTypes.string,
  time: React.PropTypes.any,
  opinionCount: React.PropTypes.number,
  tags: React.PropTypes.array,
  link: React.PropTypes.string,
};

export default DiscussionBox;
