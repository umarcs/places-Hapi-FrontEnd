import React from 'react'
//import AddPlace from '../addPlace'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
//import Profile from './profile';
import { update } from '../../_Action/user';

import Header from './header';
import Footer from './footer'
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
var margin = {
  marginTop: "20px",
  marginBottom : "30px"
}
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this)
    this.PlaceAdd = this.PlaceAdd.bind(this)
   
  }
 

  updateUser(data) {
    this.props.update(data)
  }
  PlaceAdd(data) {
    console.log("add palce data is ", data)
  }
  render() {


    return (

      <div>
        {/* Navigation*/}
        <Header />

        <div className="content-wrapper">
          <div className="container-fluid " style={margin}>
           

            {this.props.children}      
          </div>
         
          
        </div>
        <Footer />
      </div>
    )
  }
};
function mapDispathToProps(dispatch) {
  return bindActionCreators({ update }, dispatch)
}
export default connect(null, mapDispathToProps)(Dashboard)