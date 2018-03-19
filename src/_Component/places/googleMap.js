
// const { compose } = require("recompose");
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const google = window.google;

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgYQytK1P59Ngr4wksYam24itQDNtBQd0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),

    lifecycle({
        componentWillMount() {

            const refs = {}

            this.setState({
                bounds: null,
                center: {
                    lat: 41.9, lng: -87.624
                },
                markers: [],
                onMapMounted: ref => {
                    refs.map = ref;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    })
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                handleMarkerChanged: (mapProps) => {
                    let lat = mapProps.latLng.lat();
                    let lng =  mapProps.latLng.lng();
                    this.props.setLatLng({lat, lng}) 
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    // const google = window.google;

                    const bounds = new google.maps.LatLngBounds();

                    places.forEach(place => {
                        if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport)
                        } else {
                            bounds.extend(place.geometry.location)
                        }
                    });
                    const nextMarkers = places.map(place => ({
                        position: place.geometry.location,
                    }));
                    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                    });
                    // refs.map.fitBounds(bounds);
                },
            })
        },
    }),

    withScriptjs,
    withGoogleMap
)(props =>

    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
        >

            <input
                type="text"
                placeholder=" Search Your Place"
                style={{
                    boxSizing: 'content-box',
                    width: '400px',
                    height: '37px',
                    marginTop: '5px',
                    padding: '0px 12px',
                    borderRadius: '11px',
                    boxShadow: 'rgb(255, 38, 38) 0px 2px 6px',
                    fontSize: '20px',
                    outline: 'double',
                    border: `1px solid transparent`,
                    textOverflow: `ellipses`,
                }}
            />
        </SearchBox>

        {props.markers.map((marker, index) =>
            //   <Marker key={index} position={marker.position} />
            <Marker
                key={index}
                title="Drag it to your on location"
                position={marker.position}
                onDragEnd={props.handleMarkerChanged}
                onClick={props.handleMarkerChanged}
                draggable={true}
                animation={2} />
        )}
    </GoogleMap>
);

