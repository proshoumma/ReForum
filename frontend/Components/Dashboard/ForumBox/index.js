import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

import Button from 'Components/Button';

class ForumBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newForumTitle: '',
      newForumSlug: '',
    };
  }

  render() {
    const {
      forums,
      deleteAction,
      createAction,
    } = this.props;

    const {
      newForumTitle,
      newForumSlug,
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.title}>Current Forums</div>
        <div className={styles.forumsContainer}>
          {/* <div className={styles.loadingMsg}>Removing forum, please wait...</div> */}

          { forums.map((forum) => <div key={forum.id} className={styles.forum}>
            <div className={styles.forumTitle}>{ forum.name }</div>
            <div className={styles.forumSlug}>({ forum.slug })</div>
            <div className={styles.removeButton}>
              <Button onClick={() => { deleteAction(forum.id); }}>Remove</Button>
            </div>
          </div>) }

        </div>

        <div className={styles.createForumContainer}>
          {/* <div className={styles.loadingMsg}>Creating forum, please wait...</div> */}
          <div className={styles.createTitle}>Create New Forum</div>
          <div className={styles.createForum}>
            <div className={styles.createInputContainer}>
              <div className={styles.inputLabel}>Title: </div>
              <input type={'text'} className={styles.createInput} placeholder={'Forum Title'} />
            </div>
            <div className={styles.createInputContainer}>
              <div className={styles.inputLabel}>Slug: </div>
              <input type={'text'} className={styles.createInput} placeholder={'forum_slug'} />
            </div>
            <Button onClick={() => { createAction({ title: newForumTitle, slug: newForumSlug }); }}>Create</Button>
          </div>
          {/* <div className={styles.errorMsg}>Slug cannot contain empty charecters!</div> */}
        </div>
      </div>
    );
  }
}

ForumBox.defaultProps = {
};

ForumBox.propTypes = {
  forums: React.PropTypes.array,
  deleteAction: React.PropTypes.func,
  createAction: React.PropTypes.func,
};

export default ForumBox;
