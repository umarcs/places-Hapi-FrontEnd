import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {update} from '../../_Action/user';

import Header from './header';
import Footer from './footer'

const margin = {
  marginTop: "20px",
  marginBottom: "30px"
}
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this
      .updateUser
      .bind(this)
    this.PlaceAdd = this
      .PlaceAdd
      .bind(this)
  }
  updateUser(data) {
    this
      .props
      .update(data)
  }
  PlaceAdd(data) {
    console.log("add palce data is ", data)
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content-wrapper">
          <div className="container-fluid " style={margin}>
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
};
function mapDispathToProps(dispatch) {
  return bindActionCreators({
    update
  }, dispatch)
}
export default connect(null, mapDispathToProps)(Dashboard)