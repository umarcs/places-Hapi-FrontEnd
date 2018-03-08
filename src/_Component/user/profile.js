import React from 'react'
//import AddPlace from '../addPlace'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../../_Action/user';
import { Button, ButtonGroup } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Profile extends React.Component {

    render() {
        return (

            <div id="user-profile-2" className="user-profile">
                <div className="tabbable">

                    <div className="tab-content no-border padding-24">
                        <div id="home" className="tab-pane in active">
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 center">
                                    <span className="profile-picture">
                                        <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                    </span>
                                    <div className="space space-4" />
                                    <a href="" className="btn btn-sm btn-block btn-success">
                                        <i className="ace-icon fa fa-plus-circle bigger-120" />
                                        <span className="bigger-110">Add picture</span>
                                    </a>

                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <h4 className="blue">
                                        <span className="middle">My Profile</span>
                                        
                                    </h4>
                                    <div className="profile-user-info">
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> First Name </div>
                                            <div className="profile-info-value">
                                                <span>{this.props.users.firstName}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Last Name</div>
                                            <div className="profile-info-value">
                                                <i className=" light-orange bigger-110" />
                                                <span>{this.props.users.lastName}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">Email  </div>
                                            <div className="profile-info-value">
                                                <span>{this.props.users.email}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name"> Joined </div>
                                            <div className="profile-info-value">
                                                <span>2010/06/20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr hr-8 dotted" />
                                    <p data-placement="top" data-toggle="tooltip" title="Edit"><Link to={`/profile/update-profile`} className="btn btn-primary btn-xs">EDIT<span className="glyphicon glyphicon-pencil"></span></Link></p>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>


        )
    }
}
function mapStateProps(state) {
    //console.log("data hi data", state)
    return {
      users: state.user.login
    }
  
  }
function mapDispathToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateProps, mapDispathToProps)(Profile)