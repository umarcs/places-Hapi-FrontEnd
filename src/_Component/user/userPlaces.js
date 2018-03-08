
import React from 'react'
//import AddPlace from '../addPlace'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../../_Action/user';
import { Button, ButtonGroup } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { getPlacesOfOneUser } from '../../_Action/place'
import { setTimeout } from 'timers';
class UserPlaces extends React.Component {
  constructor() {
    super();
    this.placeId = this.placeId.bind(this)


  }
  placeId(id) {
    alert(id)
  }

  componentDidMount() {
    setTimeout(() => {
      const id = this.props.user._id
      this.props.getPlacesOfOneUser(id)
    }, 100)

  }
  render() {
    return (

                       
      <div className="container containerWidth">
        <div className="row">
        <div className="modal-body">

          <div className="card bg-faded card-block">
            <h3>User Places</h3>
          </div>

          <div className="col-md-12">
            <div className="table-responsive">

              <table id="mytable" className="table table-bordred table-striped">

                <thead>

                  <th>Title</th>
                  <th>Description</th>
                  <th>Address</th>
                  <th>Edit</th>

                </thead>
                <tbody>
                  {
                    this.props.places.map((data, i) => {
                      return <tr key={i}>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.address}</td>
                        <p data-placement="top" data-toggle="tooltip" title="Edit"><Link to={`/places/update-place/${data._id}`} className="btn btn-primary btn-xs">EDIT<span className="glyphicon glyphicon-pencil"></span></Link></p>



                      </tr>
                    })

                  }
                </tbody>
              </table>
            </div>

          </div>
        </div>
        </div>
      </div>
    )
  }
} function mapStateToProps(state) {
  return {
    user: state.user.login,
    places: state.places.places
  };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ getPlacesOfOneUser }, dispatch)
}
export default connect(mapStateToProps, mapDispathToProps)(UserPlaces)