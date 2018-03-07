import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


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
        const markers = this.props.markers || []
        return (

            <GoogleMap
                ref={this.mapLoaded.bind(this)}
                onZoomChanged={this.onZoomChanged.bind(this)}
                onDragEnd={this.mapMoved.bind(this)}
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
            >
                {<Marker
                    title="umar house"
                    position={{ lat: 30.231078, lng: 71.456956 }}
                   
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

export default withGoogleMap(Map);