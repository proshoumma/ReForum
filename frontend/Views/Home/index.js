import React, { Component } from 'react';
import classnames from 'classnames';

import FeedBox from 'Containers/FeedBox';
import SideBar from 'Containers/Sidebar';

import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div className={classnames(appLayout.constraintWidth, appLayout.column)}>
        <div className={appLayout.primaryContent}>
          <FeedBox />
        </div>
        <div className={appLayout.secondaryContent}>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default Home;
