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
        console.log("np>",latLng)
        this.setState({ ...latLng })

    }
     handleSubmit = place => {
        place.location = { lat: this.state.lat, lng: this.state.lng }
        console.log("place is here", place)

        return updatePlace(place)
     }

     componentDidMount() {
          const id = this.props.match.params.pId
          this.props.getPlace(id)
     }
     componentWillReceiveProps(nextProps){
        console.log("componentDidMount",nextProps)

        nextProps.place
        ?
        this.setState({ ...nextProps.place.location })
        :
        ''

     }

    render() {
        const { loading, place } = this.props;    
        const initVals = place ? place : {}
          

        console.log("initVals: ", initVals)

        return (
            <div>
                {loading && <div>Loading....</div>}
                <PlaceForm onSubmit={this.handleSubmit}  setLatLng={this.setLatLng}  initialValues={initVals}  />
            </div>
        )
    }
}
function mapStateToProps(state) {
     console.log("mapStateToProps >>>>>>>>>>>>>>  ", state.places)
     return {
         place : state.places.place
     }
 }

function mapDispathToProps(dispatch) {
     return bindActionCreators({ updatePlace, getPlace }, dispatch)
}


export default connect(mapStateToProps, mapDispathToProps)(Update_Place)
//export default PlaceForm;