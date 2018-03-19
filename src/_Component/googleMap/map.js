import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker, google } from 'react-google-maps';


class Map extends Component {
    constructor() {
        super();
        this.state = {
            map: null
        }
    }
    mapMoved() {
        console.log("map moved" + JSON.stringify(this.state.map.getCenter()))
    }
    mapLoaded(map) {
        console.log("map LOADED", map)
        if (this.state.map != null)
            return
        this.setState({
            map
        })
    }
    onZoomChanged() {
        console.log("on zoom changed", this.state.map.getZoom())

    }

    render() {
        const markers = this.props.markers || [];
        console.log("LOLOLOLOLL>>>", this.props.place.lat)

        return (
            this.props.place.lat
                ?
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onZoomChanged={this.onZoomChanged.bind(this)}
                    // onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}
                >
                    {<Marker
                   { ...alert(this.props.place.lat)}
                        title="umar house"
                        position={{ lat: 30.1575, lng: 71.5249 }}

                    />
                    }

                    {markers.map((Marker, index) => (
                        <Marker {...markers} />
                    )
                    )}

                </GoogleMap>
                :
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onZoomChanged={this.onZoomChanged.bind(this)}
                    // onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}
                >
                    {<Marker
                        title="umar house"
                        position={{ lat: 30.6682, lng: 73.1114 }}

                    />
                    }

                    {markers.map((Marker, index) => (
                        <Marker {...markers} />
                    )
                    )}

                </GoogleMap>
                )
    }
}

function mapStateToProps(state) {
    return {
        place: state.places.place
    };
}


//export default connect(mapStateToProps)(Map)
export default connect(mapStateToProps)(withGoogleMap(Map))