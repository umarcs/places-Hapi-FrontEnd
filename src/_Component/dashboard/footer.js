import React from 'react'
//import AddPlace from '../addPlace'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Logout } from '../../_Action/user';
import { Button, ButtonGroup } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
// import Profile from './profile';
// import {update} from '../../_Action/user'
// import UpdateUserForm from './updateUser';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Footer extends React.Component {
    // constructor() {
    //     super();
    //     this.logOut = this.logOut.bind(this)
    //     this.updateUser = this.updateUser.bind(this)
    // }
    // logOut() {
    //     this.props.Logout()
    // }
    // updateUser(data){
    //   this.props.update(data)
    // }
  render() {
    return (

        <footer className="sticky-footer">
        <div className="container">
          <div className="text-center">
            <small>Copyright © Your Website 2018</small>
          </div>
        </div>
        </footer>

    )
  }
};
function mapDispathToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}
export default connect(null, mapDispathToProps)(Footer)