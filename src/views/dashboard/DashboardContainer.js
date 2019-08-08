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
    // const { props } = this;
    console.log('dash', this.props);
    
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardContainer));