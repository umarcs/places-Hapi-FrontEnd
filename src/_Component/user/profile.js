import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        let  userProfile= this.props.user.profilePicture;
        const baseURL = `http://localhost:3006/users/${userProfile}`;

        return (
            <div id="user-profile-2" className="user-profile">
                <div className="tabbable">

                    <div className="tab-content no-border padding-24">
                        <div id="home" className="tab-pane in active">
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 center">
                                    <span className="profile-picture">
                                        <img
                                            className="editable img-responsive"
                                            alt=" Avatar"
                                            height="243px"
                                            width = "230px"
                                            id="avatar2"
                                            src = {baseURL}/>
                                    </span>
                                    <div className="space space-4" />
                                    

                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <h4 className="blue">
                                        <span className="middle">My Profile</span>

                                    </h4>
                                    <div className="profile-user-info">
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">
                                                First Name
                                            </div>
                                            <div className="profile-info-value">
                                                <span>{this.props.user.firstName}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">
                                                Last Name</div>
                                            <div className="profile-info-value">
                                                <i className=" light-orange bigger-110" />
                                                <span>{this.props.user.lastName}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">Email
                                            </div>
                                            <div className="profile-info-value">
                                                <span>{this.props.user.email}</span>
                                            </div>
                                        </div>
                                        <div className="profile-info-row">
                                            <div className="profile-info-name">
                                                Joined
                                            </div>
                                            <div className="profile-info-value">
                                                <span>2010/06/20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr hr-8 dotted" />
                                    <p data-placement="top" data-toggle="tooltip" title="Edit">
                                        <Link to={`/profile/update-profile`} className="btn btn-primary btn-xs">EDIT<span className="glyphicon glyphicon-pencil"></span>
                                        </Link>
                                    </p>
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
    return { user: state.user.login }

}
function mapDispathToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateProps, mapDispathToProps)(Profile)