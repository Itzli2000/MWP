import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DashboardContainer extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { props } = this;
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        { props.userData && <p>Estes es tu Inicio { props.userData.name }</p> }
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = ({ login }) => ({
  userLogged: login.login,
  userData: login.fetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardContainer));