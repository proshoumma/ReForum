import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';
import appLayout from 'SharedStyles/appLayout.css';

import Discussion from 'Components/SingleDiscussion/Discussion';
import ReplyBox from 'Components/SingleDiscussion/ReplyBox';
import Opinion from 'Components/SingleDiscussion/Opinion';

class SingleDiscussion extends Component {
  render() {
    return (
      <div className={appLayout.constraintWidth}>
        <Discussion />
        <ReplyBox />
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
      </div>
    );
  }
}

export default SingleDiscussion;
