import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions';
// components imports
import SliderComponent from './components/SliderComponent';

class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            background: 'Expert',
        }
    }    

    loginExpert = value => {
        this.props.loginAction(value);
        this.setState({background: value});
    }

    loginSearchExpert = value => {
        this.props.loginAction(value);
        this.setState({background: value});
    }

    render() {
        return (
            <div className="row fullHeight">
                <SliderComponent
                    currentState={this.state}
                    loginExpert={this.loginExpert}
                    loginSearchExpert={this.loginSearchExpert}
                />
            </div>
        );
    }
}

LoginContainer.propTypes = {
    loginAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    loginAction: value => dispatch(login(value)),
});

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);