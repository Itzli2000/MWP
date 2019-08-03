import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components import
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardContainer from './../dashboard/DashboardContainer';

class AppFrame extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="AppFrame row">
        <Header
          {...this.props}
          changeLanguage={this.props.changeLanguage}
        />
        <div className="col-12 dashboardContent">
          <div className="row">
            <div className="col-12 col-lg-3 sidebar"></div>
            <div className="col-12 col-lg-9 ">
              <Router>
                <Switch>
                  <Route path="/user/dashboard" render={() =>
                    <DashboardContainer
                      {...this.props}
                      changeLanguage={this.props.changeLanguage}
                    />
                  }
                  />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

AppFrame.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = ({ login }) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);