import React, { Component } from 'react';
import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
