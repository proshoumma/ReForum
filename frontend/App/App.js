import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';

import { getForums, updateCurrentForum } from './actions';

class AppContainer extends Component {
  componentDidMount() {
    // get the forums
    this.props.getForums();

    // initially update currently selected forum based on current route
    this.updateCurrentForum(true);
  }

  componentDidUpdate() {
    // update currently selected forum based on current route
    this.updateCurrentForum();
  }

  updateCurrentForum(updateOnMount = false) {
    const {
      params,
      currentForum,
      updateCurrentForum,
    } = this.props;

    if (updateOnMount) {
      params.forum ? updateCurrentForum(params.forum) : updateCurrentForum('general');
    } else {
      params.forum ?
        params.forum !== currentForum ? updateCurrentForum(params.forum) : null
      : currentForum !== 'general' ? updateCurrentForum('general') : null;
    }
  }

  render() {
    console.log(this.props.forums);

    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    currentForum: state.app.currentForum,
    forums: state.app.forums,
  }; },
  (dispatch) => { return {
    updateCurrentForum: (forum) => { dispatch(updateCurrentForum(forum)); },
    getForums: (forum) => { dispatch(getForums()); },
  }; }
)(AppContainer);
