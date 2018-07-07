import React, { Component } from 'react';

import Info from './info/Info';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>It is a parent component of home page</h1>
        <Info />
      </div>
    );
  }
}

export default Home;
