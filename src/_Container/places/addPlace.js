import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPlace } from '../../_Action/place';
import PlaceForm from '../../_Component/places/placesForm'


class AddPlace extends React.Component {
    constructor() {
        super();
        this.state = {
            lat : null,
            lng : null
        }
    }
    setLatLng = (latLng) => {
        console.log('Container: ', latLng)
        this.setState({ ...latLng })
    }
    
    handleSubmit(place) {

        //console.log('this.state: ', this.state)
        if (this.props.user) {
            place.lat = this.state.lat;
            place.lng = this.state.lng;
            place.user = this.props.user._id;
        }
        return addPlace(place)
    }

    render() {
        return (
            <div>
                <PlaceForm onSubmit={this.handleSubmit.bind(this)}   setLatLng={this.setLatLng}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.login
    }
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ addPlace }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(AddPlace)
