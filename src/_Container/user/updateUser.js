import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import {login} from '../../_Action/user' 
import { update } from "../../_Action/user";

import UpdateUser from '../../_Component/user/updateUser'


class UpdateUserData extends Component {
    constructor() {
        super();
        this.update = this.update.bind(this)

    }
    update(data) {
        this.props.update(data)
    }

    render() {
        return (
            <div>
                <UpdateUser  onSubmit = {this.update}/>
            </div>
        )
    }
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ update }, dispatch)
}
export default connect(null,mapDispathToProps)(UpdateUserData)
