import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProfileContainer extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { props } = this;
    return (
      <div className="dashboard">
        <h1>Profile</h1>
        {
          (props.fetch_data && !props.fetch_data.isLogged) && <p>No has completado tu formulario</p>
        }
        {
          (props.fetch_data && props.fetch_data.isLogged) && <p>Bienvenido</p>
        }
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = ({ login }) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));