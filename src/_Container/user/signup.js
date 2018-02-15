import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpForm from '../../_Component/user/signup';
import { signup } from "../../_Action/user";
class SignUp extends React.Component {
    constructor() {
        super();
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(vals) {
        return this.props.signup(vals)
    }
    render() {
        return ( 
            <div>
                <SignUpForm onSubmit = {this.onSubmitForm}/>
            </div>
        )

    }
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ signup }, dispatch)
}
export default connect(null,mapDispathToProps)(SignUp)
