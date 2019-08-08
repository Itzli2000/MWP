import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
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
    return  <DashboardContainer />
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
              <Link to={ match.path + "dashboard"}>Dashboard</Link>
              <br/>
              <Link to={ match.path + "handle"}>Test 1</Link>
            </div>
            <div className="col-12 col-lg-9 ">
              <Route path={ match.path + "/dashboard"} component={this.dashboardComponent} />
              <Router>
                <Switch>
                  {/* <Route path={ match.patch +"dashboard"} render={() =>
                    <DashboardContainer
                      {...props}
                    />
                  }
                  /> */}
                  {/* <Route component={() => "404 not found"} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppFrame));