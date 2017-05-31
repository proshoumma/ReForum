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
      errorMsg: null,
    };

    this.handleCreateForum = this.handleCreateForum.bind(this);
  }

  handleCreateForum() {
    // remove any error messages
    this.setState({ errorMsg: null });

    const {
      newForumTitle,
      newForumSlug,
    } = this.state;

    let convertedTitle = null;
    let convertedSlug = null;

    // check and convert forum title
    if (newForumTitle !== '') {
      // trim any leading or ending white spaces
      convertedTitle = newForumTitle.trim();

      // check the length, 4 is hardcoded here
      if (convertedTitle.length < 4) {
        return this.setState({ errorMsg: 'Forum title should have at least 4 charecters.' });
      }
    } else {
      return this.setState({ errorMsg: 'Forum title is empty. Please provide a valid Forum Title.' });
    }

    // check and confirm forum slug
    if (convertedSlug !== '') {
      const slugRegex = /^[a-z\_]+$/;
      convertedSlug = newForumSlug.match(slugRegex) ? newForumSlug : null;

      // length check
      if (convertedSlug && convertedSlug.length < 4) {
        return this.setState({ errorMsg: 'Forum slug should have at least 4 charecters.' });
      }
    } else {
      return this.setState({ errorMsg: 'Forum slug is empty. Please provide a valid Forum Slug.' });
    }

    if (!convertedTitle) { return this.setState({ errorMsg: 'Please provide a valid Forum Title.' }); }
    if (!convertedSlug) { return this.setState({ errorMsg: 'Please provide a valid Forum Slug. Slug can only contain small case alphabets and underscore.' }); }

    if (convertedTitle && convertedSlug) { this.props.createAction({ title: convertedTitle, slug: convertedSlug }); }
  }

  render() {
    const {
      forums,
      creatingForum,
      deleteAction,
      deletingForum,
    } = this.props;

    const {
      newForumTitle,
      newForumSlug,
      errorMsg,
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.title}>Current Forums</div>
        <div className={styles.forumsContainer}>
          { deletingForum && <div className={styles.loadingMsg}>Removing forum, please wait...</div> }

          { forums.map((forum) => <div key={forum.id} className={styles.forum}>
            <div className={styles.forumTitle}>{ forum.name }</div>
            <div className={styles.forumSlug}>({ forum.slug })</div>
            <div className={styles.removeButton}>
              <Button onClick={() => { deleteAction(forum.id); }}>Remove</Button>
            </div>
          </div>) }

        </div>

        <div className={styles.createForumContainer}>
          { creatingForum && <div className={styles.loadingMsg}>Creating forum, please wait...</div> }
          <div className={styles.createTitle}>Create New Forum</div>
          <div className={styles.createForum}>
            <div className={styles.createInputContainer}>
              <div className={styles.inputLabel}>Title: </div>
              <input
                type={'text'}
                className={styles.createInput}
                placeholder={'Forum Title'}
                onChange={(e) => { this.setState({ newForumTitle: e.target.value }); }}
              />
            </div>
            <div className={styles.createInputContainer}>
              <div className={styles.inputLabel}>Slug: </div>
              <input
                type={'text'}
                className={styles.createInput}
                placeholder={'forum_slug'}
                onChange={(e) => { this.setState({ newForumSlug: e.target.value }); }}
              />
            </div>
            <Button onClick={this.handleCreateForum}>Create</Button>
          </div>
          { errorMsg && <div className={styles.errorMsg}>{errorMsg}</div> }
        </div>
      </div>
    );
  }
}

ForumBox.defaultProps = {
};

ForumBox.propTypes = {
  forums: React.PropTypes.array,
  deletingForum: React.PropTypes.bool,
  deleteAction: React.PropTypes.func,
  creatingForum: React.PropTypes.bool,
  createAction: React.PropTypes.func,
};

export default ForumBox;
