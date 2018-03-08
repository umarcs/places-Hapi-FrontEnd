
import React from 'react'
//import AddPlace from '../addPlace'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../../_Action/user';
import { Button, ButtonGroup } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
// import Profile from './profile';
// import {update} from '../../_Action/user'
// import UpdateUserForm from './updateUser';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this)
        //     this.updateUser = this.updateUser.bind(this)
    }
    logOut() {
        this.props.Logout()
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.user.login && !nextProps.user.login) {
            console.log('gonit to refresh')
            // window.location.reload();
        }
    }

    // updateUser(data){
    //   this.props.update(data)
    // }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <a className="navbar-brand" href="/">PK PLaces</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                <Link className="nav-link fa fa-fw fa-dashboard" to="/profile">
                                    <span className="nav-link-text">Profile</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="update profile">
                                <Link className="nav-link fa fa-fw fa-dashboard" to="/profile/update-profile">
                                    <span className="nav-link-text">Update&nbsp;Profile</span>
                                </Link>
                            </li> */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                                {/* <a className="nav-link" href="charts.html">
                                    <i className="fa fa-fw fa-area-chart" />
                                    <span className="nav-link-text">Add Place</span>
                                </a> */}
                                {/* <Link className="nav-link fa fa-fw fa-area-chart" to="dashboard/add-place" from="dashboard">Add Place</Link> */}

                            </li>
                            {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                <a className="nav-link" href="tables.html">
                                    <i className="fa fa-fw fa-table" />
                                    <span className="nav-link-text">Profile</span>
                                </a>
                            </li> */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Places">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                                    <i className="fa fa-fw fa-wrench" />
                                    <span className="nav-link-text"> Places</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="collapseComponents">
                                    <li>
                                        <Link to="/places">My PLaces</Link>
                                    </li>
                                    <li>
                                        <Link to="/places/add-place">Add Place</Link>
                                    </li>
                                    }
                                </ul>
                            </li>
                          
                          
                        </ul>
                        <ul className="navbar-nav sidenav-toggler">
                            <li className="nav-item">
                                <a className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-left" />
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-envelope" />
                                    <span className="d-lg-none">Messages
                          <span className="badge badge-pill badge-primary">12 New</span>
                                    </span>
                                    <span className="indicator text-primary d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle" />
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">New Messages:</h6>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <strong>David Miller</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <strong>Jane Smith</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <strong>John Doe</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item small" href="#">View all messages</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell" />
                                    <span className="d-lg-none">Alerts
                          <span className="badge badge-pill badge-warning">6 New</span>
                                    </span>
                                    <span className="indicator text-warning d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle" />
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">New Alerts:</h6>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <span className="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <span className="text-danger">
                                            <strong>
                                                <i className="fa fa-long-arrow-down fa-fw" />Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <span className="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item small" href="#">View all alerts</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..." />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" />
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-fw fa-sign-out" />Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                {/* <Link  to="/">Logout</Link>                       */}
                                <button className="btn btn-info" onClick={this.logOut}  >Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ Logout }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Header)