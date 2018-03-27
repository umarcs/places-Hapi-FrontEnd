
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

var _ = require('lodash');

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={props.zoom}
    >    
        {
            props.places.map((item, i) => {
                console.log("in item:", item)
                if (!item.location) {
                    return "";
                }
                return <Marker
                    key={i}
                    title={item.title}
                    position={{ lat: parseFloat(item.location.lat), lng: parseFloat(item.location.lng) }}
                    draggable={false}
                    animation={1}
                />
            })
        }
    </GoogleMap>
))

let _MAP;
class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latLonArray: [],
            infoWindowData: {},
            center: {
                lat: 38.828707,
                lng: -98.241104
            },
            zoom: 15
        }
        this.onMapMounted = this.onMapMounted.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let locArr = nextProps.places.map(place => place.location);
        if (_MAP) {
            var bounds = new window.google.maps.LatLngBounds();
            if (locArr.length > 1) {
                locArr.map((l, i) => {
                    bounds.extend(new window.google.maps.LatLng(l.lat, l.lng));
                });
                _MAP.fitBounds(bounds);
            } else if (!_.isEmpty(locArr)) {
                _MAP.setCenter(new window.google.maps.LatLng(locArr[0].lat, locArr[0].lng));
            }
        }
    }
    onMapMounted(ref) {
        if (ref) {
            let locArr = this.props.places.map(place => place.location);
            let map = ref.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            var bounds = new window.google.maps.LatLngBounds();
            if (locArr.length > 1) {
                locArr.map((place, i) => {
                    bounds.extend(new window.google.maps.LatLng(place.lat, place.lng));
                });
                map.fitBounds(bounds);
            } else if (!_.isEmpty(locArr)) {
                map.setCenter(new window.google.maps.LatLng(locArr[0].lat,
                    locArr[0].lng));
            }

            _MAP = map;
        }

    }
    render() {
        return (
            <MyMapComponent
                zoom={this.props.zoom}
                places={this.props.places}
                onMapMounted={this.onMapMounted}
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyDgYQytK1P59Ngr4wksYam24itQDNtBQd0"}
                loadingElement={<div>{'loading...'}</div>}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div id="elementID" style={{ height: `100%` }} />}
            />
        )
    }
}

export default Maps






