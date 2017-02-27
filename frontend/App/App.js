import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import { getForums } from './actions';

class AppContainer extends Component {
  componentDidMount() {
    // get all forum list
    this.props.getForums();
  }

  render() {
    return (
      <div>
        <Header forums={this.props.forums} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    forums: state.app.forums,
  }; },
  (dispatch) => { return {
    getForums: (forum) => { dispatch(getForums()); },
  }; }
)(AppContainer);
