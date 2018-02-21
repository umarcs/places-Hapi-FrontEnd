import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import {login} from '../../_Action/user' 
import Dashborad from '../../_Component/user/dashborad'


class Profile extends Component {
        constructor() {
            super();
            
        }
       
        render() {
            return (
                <div>
                     <Dashborad /> 
                </div>
            )
        }
}
// function mapDispathToProps(dispatch) {
//     return bindActionCreators({ login }, dispatch)
//}
export default Profile ;
//connect(null,mapDispathToProps)(Profile)