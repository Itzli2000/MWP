import React, { Component } from 'react';
// i18n for translations
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
// Routes imports
import AppRoutes from "./routes/AppRoutes";

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
    return (
      <AppRoutes {...this.props} changeLanguage={this.changeLanguage}/>
    );
  }
}

export default withNamespaces()(App);
