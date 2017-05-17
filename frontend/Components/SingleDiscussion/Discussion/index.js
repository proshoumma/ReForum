import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import classnames from 'classnames';
import styles from './styles.css';

import PlaceholderImage from 'SharedStyles/placeholder.jpg';
import Button from 'Components/Button';
import Tag from 'Components/Tag';
import RichEditor from 'Components/RichEditor';

class Discussion extends Component {
  render() {
    const {
      id,
      userAvatar,
      userName,
      userGitHandler,
      discTitle,
      discDate,
      discContent,
      tags,
      favoriteCount,
      favoriteAction,
      userFavorited,
      toggleingFavorite,
      allowDelete,
      deletingDiscussion,
      deleteAction,
    } = this.props;

    let dateDisplay = moment(discDate);
    dateDisplay = dateDisplay.from(moment());

    let favCount = '';
    if (toggleingFavorite) favCount = 'Toggling Favorite...';
    else if (userFavorited) favCount = `Favorited (${favoriteCount})`;
    else if (favoriteCount === 0) favCount = 'Make favorite';
    else if (favoriteCount === 1) favCount = '1 favorite';
    else favCount = `${favoriteCount} favorites`;

    return (
      <div className={styles.container}>

        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={userAvatar} />
          <div className={styles.columnOnSmallBP}>
            <div className={styles.userInfo}>
              <Link to={`/user/${userGitHandler}`} className={styles.name}>{userName || userGitHandler}</Link>
              <a href={`https://www.github.com/${userGitHandler}`} target="_blank" className={styles.gitHandler}>
                <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
                <span>{userGitHandler}</span>
              </a>
            </div>
            <div className={styles.dateInfo}>{dateDisplay}</div>
          </div>
        </div>

        <div className={styles.discTitle}>{discTitle}</div>
        <div className={styles.discContent}>
          <RichEditor
            readOnly={true}
            value={discContent}
          />
        </div>

        <div className={styles.discFooter}>
          <div className={styles.tags}>
            { tags.map(tag => <Tag name={tag} key={_.uniqueId('tag_')} />)}
          </div>
          <Button noUppercase className={styles.favoriteButton} onClick={() => { !toggleingFavorite && favoriteAction(id); }}>
            <i className={classnames(`fa fa-${userFavorited ? 'heart' : 'heart-o'}`)}></i>
            <span>{favCount}</span>
          </Button>

          { allowDelete && <Button noUppercase className={styles.deleteButton} onClick={() => { deleteAction(); }}>
            <i className={classnames('fa fa-trash', styles.trashIcon)}></i>
            <span>Delete</span>
          </Button> }
        </div>

        { deletingDiscussion && <div className={styles.deletingDiscussion}>
          Deleting Discussion...
        </div> }
      </div>
    );
  }
}

Discussion.defaultProps = {
  id: 0,
  userAvatar: PlaceholderImage,
  userName: 'User name',
  userGitHandler: 'github',
  discTitle: 'Default Discussion Title',
  discDate: 'a day ago',
  discContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  tags: [ 'react', 'redux', 'webkit' ],
  favoriteCount: 1,
  favoriteAction: () => { },
  userFavorited: false,
  toggleingFavorite: false,
  allowDelete: false,
  deletingDiscussion: false,
  deleteAction: () => { },
};

Discussion.propTypes = {
  id: React.PropTypes.any,
  userAvatar: React.PropTypes.string,
  userName: React.PropTypes.string,
  userGitHandler: React.PropTypes.string,
  discTitle: React.PropTypes.string,
  discDate: React.PropTypes.any,
  discContent: React.PropTypes.any,
  tags: React.PropTypes.array,
  favoriteCount: React.PropTypes.number,
  favoriteAction: React.PropTypes.func,
  userFavorited: React.PropTypes.bool,
  toggleingFavorite: React.PropTypes.bool,
  allowDelete: React.PropTypes.bool,
  deletingDiscussion: React.PropTypes.bool,
  deleteAction: React.PropTypes.func,
};

export default Discussion;
