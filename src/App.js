import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
import LoginContainer from './views/login/LoginContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      background: 'Expert',
    }
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App container-fluid">
        <LoginContainer 
        { ...this.props }
          changeLanguage={this.changeLanguage}
        />
      </div>
    );
  }
}

export default withNamespaces()(App);
