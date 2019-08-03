import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetch_action, login_type } from '../../actions';
// Externasl imports
import Swal from 'sweetalert2';
// components imports
import SliderComponent from './components/SliderComponent';
import DescriptionComponent from './components/DescriptionComponent';

class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            background: 'Expert',
        }
    }

    loginUserType = value => {
        this.props.loginAction(value);
        this.setState({ background: value });
    }

    showLoginModal = value => {
        const instance = this;
        const { t } = instance.props;
        var expertContent =
            `<div>
            <img class="img-fluid" src="https://dummyimage.com/300X150/000/fff" alt="logo">
            <h2>${t('ModalExpertTitle')}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut officia est eius delectus unde eos aperiam expedita enim animi temporibus neque, debitis reiciendis in dolorem sapiente porro sunt laboriosam?</p>
            <button id="LinkedButton">LinkedIn</button>
            <button style="display:none" id="Facebook">Facebook</button>
            </div>`;
        var userSearchContent =
            `<div>
            <img class="img-fluid" src="https://dummyimage.com/300X150/000/fff" alt="logo">
            <h2>${t('ModalSearchTitle')}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut officia est eius delectus unde eos aperiam expedita enim animi temporibus neque, debitis reiciendis in dolorem sapiente porro sunt laboriosam?</p>
            <button id="LinkedButton">LinkedIn</button>
            <button id="Facebook">Facebook</button>
            </div>`;
        Swal.fire({
            html: (value === 'Expert' ? expertContent : userSearchContent),
            text: 'Do you want to continue', onBeforeOpen: () => {
                const content = Swal.getContent();
                const $ = content.querySelector.bind(content);
                const FacebookButton = $('#Facebook');
                const LinkedButton = $('#LinkedButton');
                LinkedButton.addEventListener('click', (e) => {
                    instance.props.loginType('LinkedInLogged');
                })
                FacebookButton.addEventListener('click', (e) => {
                    instance.props.loginType('FacebookLogged');
                })
            },
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: '<i class="fa fa-times-circle-o "></i>',
            width: '50%'
        });
    }

    render() {

        return (
            <div className="row fullHeight">
                <SliderComponent
                    {...this.props}
                    newData={this.props}
                    currentState={this.state}
                    loginUserType={this.loginUserType}
                    showLoginModal={this.showLoginModal}
                />
                <DescriptionComponent
                    {...this.props}
                    changeLanguage={this.props.changeLanguage}
                />
            </div>
        );
    }
}

LoginContainer.propTypes = {
    loginAction: PropTypes.func.isRequired,
    loginType: PropTypes.func.isRequired,
    changeLanguage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    loginAction: value => dispatch(fetch_action(value)),
    loginType: value => dispatch(login_type(value)),
});

const mapStateToProps = ({ login }) => ({
    login: login.login,
    login_type: login.login_type,
    fetch_data: login.fetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);