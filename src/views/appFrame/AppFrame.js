import React, { Component } from 'react';
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetch_result } from '../../actions/login';
// Components import
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardContainer from './../dashboard/DashboardContainer';
import ProfileContainer from './../profile/ProfileContainer';

class AppFrame extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    if (this.props.fetch_data && this.props.fetch_data.isLogged) {
      this.props.logOut({isLogged:false});
    }
    this.validateUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.validateUser();
    }


  }

  validateUser = () => {
    if (this.props.fetch_data && !this.props.fetch_data.isLogged) {
      this.props.history.push(this.props.match.path + '/profile');
    }
    else {
      if (!this.props.fetch_data) {
        this.props.history.push('/');
      }
    }
  };


  dashboardComponent = () => {
    return <DashboardContainer />
  }

  render() {
    const { props } = this;
    const { match, t } = props;

    return (
      <div className="AppFrame container-fluid">
        <Header
          {...props}
          changeLanguage={props.changeLanguage}
        />
        <div className="col-12 dashboardContent">
          <div className="row">
            <div className="col-12 col-lg-3 sidebar">
              <NavLink activeClassName='active' to={match.path + "/dashboard"}>{t('menuDashboard')}</NavLink>
              <br />
              <NavLink activeClassName='active' to={match.path + "/profile"}>{t('menuProfile')}</NavLink>
              <br/>
              <NavLink activeClassName='active' to={match.path + "/appointments"}>{t('menuAppointments')}</NavLink>
              <br/>
              <NavLink activeClassName='active' to={match.path + "/settngs"}>{t('menuSettings')}</NavLink>
            </div>
            <div className="col-12 col-lg-9 ">
              <Switch>
                <Route exact path={match.path + "/dashboard"} render={() =>
                  <DashboardContainer
                    {...props}
                  />
                }
                />
                <Route exact path={match.path + "/profile"} render={() => 
                  <ProfileContainer  
                  {...this.props}
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
  logOut: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  logOut: value => dispatch(fetch_result(value))
});

const mapStateToProps = ({ login }) => ({
  fetch_data: login.fetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppFrame));