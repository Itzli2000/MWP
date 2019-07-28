import React, { Component } from 'react';
import LoginContainer from './views/login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <LoginContainer/>
      </div>
    );
  }
}

export default App;
