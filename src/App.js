import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// i18n for translations
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
// App containers
import LoginContainer from './views/login/LoginContainer';
import AppFrame from "./views/appFrame/AppFrame";

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
      <Router>
        <div className="App">
          <Switch>
            <Route path="/user/" render={() =>
              <AppFrame
                {...this.props}
                changeLanguage={this.changeLanguage}
              />
            }
            />
            <Route exact path="/" render={() =>
              <LoginContainer
                {...this.props}
                changeLanguage={this.changeLanguage}
              />
            } />
            <Route path="*" component={()=>"404 not found"}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withNamespaces()(App);
