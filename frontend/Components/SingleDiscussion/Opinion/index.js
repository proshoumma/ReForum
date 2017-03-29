import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Button from 'Components/Button';
import RichEditor from 'Components/RichEditor';

class Opinion extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userGitHandler,
      opDate,
      opContent,
    } = this.props;

    let dateDisplay = moment(opDate);
    dateDisplay = dateDisplay.from(moment());

    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={userAvatar} />
          <div className={styles.userInfo}>
            <div className={styles.name}>{userName}</div>
            <a href={`https://www.github.com/${userGitHandler}`} target="_blank" className={styles.gitHandler}>
              <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
              <span>{userGitHandler}</span>
            </a>
          </div>
          <div className={styles.dateInfo}>{dateDisplay}</div>
          {/* <Button noUppercase>Quote</Button> */}
        </div>

        <div className={styles.opContent}>
          <RichEditor
            readOnly
            value={opContent}
          />
        </div>

        <div className={styles.commentFooter}>

        </div>
      </div>
    );
  }
}

Opinion.defaultProps = {
  userAvatar: PlaceholderImage,
  userName: 'User name',
  userGitHandler: 'github',
  opDate: 'a day ago',
  opContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

Opinion.propTypes = {
  userAvatar: React.PropTypes.string,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  opDate: React.PropTypes.any,
  opContent: React.PropTypes.string,
};

export default Opinion;
