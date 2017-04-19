import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';

import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

import Counts from 'Components/Dashboard/Counts';

class Dashboard extends Component {
  render() {
    return (
      <div className={classnames(appLayout.constraintWidth, styles.container)}>
        <div className={styles.countsContainer}>
          <Counts />
          <Counts />
          <Counts />
          <Counts />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => { return {
  }; },
  (dispatch) => { return {
  }; }
)(Dashboard);
