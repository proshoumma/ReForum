import React, { Component } from 'react';
import styles from './styles';

import Button from 'Components/Button';

class SideBar extends Component {
  render() {
    return (
      <div className={styles.sidebarContainer}>
        <Button type='outline' fullWidth noUppercase>
          New Discussion
        </Button>
      </div>
    );
  }
}

export default SideBar;
