import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePlace, getPlace } from '../../_Action/place';
import PlaceForm from '../../_Component/places/placesForm'


class Update_Place extends React.Component {
    constructor() {
        super();
        this.state = {
            lat : null,
            lng : null
        }
    }
    setLatLng = (latLng) => {
       this.setState({
        lat : latLng.lat,
        lng : latLng.lng
       })
    }
     handleSubmit = place => {
         console.log("lat lng", this.state.lat,this.state.lng)
        place.lat = this.state.lat;
        place.lng = this.state.lng;
        return updatePlace(place)
     }

     componentDidMount() {
          const id = this.props.match.params.pId
          this.props.getPlace(id)
     }

     render() {
          let initVals = {}
          if (this.props.place) {
               initVals = this.props.place
          }
          return (
               <div>
                    <PlaceForm onSubmit={this.handleSubmit}  setLatLng={this.setLatLng}  initialValues={initVals}  />
               </div>
          )
     }
}
function mapStateToProps(state) {
     console.log("initialValues state", state.places)
     return {
         place : state.places.place
     }
 }

function mapDispathToProps(dispatch) {
     return bindActionCreators({ updatePlace, getPlace }, dispatch)
}


export default connect(mapStateToProps, mapDispathToProps)(Update_Place)
//export default PlaceForm;