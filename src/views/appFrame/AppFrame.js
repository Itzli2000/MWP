import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from "react-router-dom";
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

  dashboardComponent = () => {
    return <DashboardContainer />
  }

  render() {
    const { props } = this;
    const { match } = props;
    console.log('frame', props);

    return (
      <div className="AppFrame container-fluid">
        <Header
          {...props}
          changeLanguage={props.changeLanguage}
        />
        <div className="col-12 dashboardContent">
          <div className="row">
            <div className="col-12 col-lg-3 sidebar">
              <NavLink activeClassName='active' to={match.path + "/dashboard"}>Dashboard</NavLink>
              <br />
              <NavLink activeClassName='active' to={match.path + "/handle"}>Test 1</NavLink>
            </div>
            <div className="col-12 col-lg-9 ">
              <Switch>
                <Route exact path={match.path + "/dashboard"} render={() =>
                  <DashboardContainer
                    {...props}
                  />
                }
                />
                <Route component={() => "404 not found"} />
              </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppFrame));