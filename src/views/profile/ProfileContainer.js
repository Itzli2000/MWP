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
          (!props.userLogged && props.userData) && <p>{ props.userData.name } - No has completado tu formulario</p>
        }
        {
          (props.userLogged && props.userData) && <p>Bienvenido { props.userData.name }</p>
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
  userData: login.fetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));