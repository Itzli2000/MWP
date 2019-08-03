import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import LoginContainer from './views/login/LoginContainer';

class App extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="App container-fluid">
        <LoginContainer/>
        <h1>{t('Welcome to React')}</h1>
      </div>
    );
  }
}

export default withNamespaces()(App);
