import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {login} from '../../_Action/user' 
import LoginForm from '../../_Component/user/login'


class Login extends Component {
        constructor() {
            super();
            this.loginFunc = this.loginFunc.bind(this)
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.user.login) {
                window.location.reload()
            }
        }

        loginFunc(vals) {
           return this.props.login(vals)
        }
        render() {
            return (
                <div>
                     <LoginForm onSubmit = { this.loginFunc }/> 
                </div>
            )
        }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Login)