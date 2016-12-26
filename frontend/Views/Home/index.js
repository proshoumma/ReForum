import React, { Component } from 'react';

class Home extends Component {
  handleForm(event) {
    event.preventDefault();
    console.log('im called');
  }

  render() {
    return (
      <div>
        <form action="" onClick={this.handleForm}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Home;
