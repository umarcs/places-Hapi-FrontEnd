// import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withGoogleMap, GoogleMap, Marker, google } from 'react-google-maps';


// class Map extends Component {
//     constructor() {
//         super();
//         this.state = {
//             map: null
//         }
//     }
//     mapMoved() {
//         console.log("map moved" + JSON.stringify(this.state.map.getCenter()))
//     }
//     mapLoaded(map) {
//         console.log("map LOADED", map)
//         if (this.state.map != null)
//             return
//         this.setState({
//             map
//         })
//     }
//     onZoomChanged() {
//         console.log("on zoom changed", this.state.map.getZoom())

//     }


//     render() {
//         const markers = this.props.markers || [];

//         return (
//             {...this.props.place.location}
//                 ?
//                 <GoogleMap
//                     ref={this.mapLoaded.bind(this)}
//                     onZoomChanged={this.onZoomChanged.bind(this)}
//                     // onDragEnd={this.mapMoved.bind(this)}
//                     defaultZoom={this.props.zoom}
//                     defaultCenter={this.props.center}
//                 >
//                     {<Marker
//                         title={this.props.place.title}
//                         position={{...this.props.place.location}}

//                     />
//                     }
//                     {markers.map((Marker, index) => (
//                         <Marker {...markers} />
//                     )
//                     )}

//                 </GoogleMap>
//                 :
//                 <GoogleMap
//                     ref={this.mapLoaded.bind(this)}
//                     onZoomChanged={this.onZoomChanged.bind(this)}
//                     // onDragEnd={this.mapMoved.bind(this)}
//                     defaultZoom={this.props.zoom}
//                     defaultCenter={this.props.center}
//                 >
//                     {<Marker
//                         title="umar house"
//                         position={{ lat: 30.220727976485225, lng: 71.47468533366009 }}

//                     />
//                     }

//                     {markers.map((Marker, index) => (
//                         <Marker {...markers} />
//                     )
//                     )}

//                 </GoogleMap>
//                 )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         place: state.places.place
//     };
// }


// //export default connect(mapStateToProps)(Map)
// export default connect(mapStateToProps)(withGoogleMap(Map))



































import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import fetch from 'isomorphic-fetch'



export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgYQytK1P59Ngr4wksYam24itQDNtBQd0",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    
    lifecycle({
        componentDidMount() {

            this.setState({

                zoomToMarkers: map => {
                    console.log("Zoom to markers");
                    const bounds = new window.google.maps.LatLngBounds();
                   
                    map.props.children.forEach((child) => {
                        if (child.type === Marker) {
                            bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                        }
                    })
                    map.fitBounds(bounds);
                }
            })
        },

        componentWillReceiveProps(newProps){
            zoomToMarkers: map => {
                console.log("Zoom to markers");
                const bounds = new window.google.maps.LatLngBounds();
               
                map.props.children.forEach((child) => {
                    if (child.type === Marker) {
                        bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                    }
                })
                map.fitBounds(bounds);
            }
        },

        zoomToMarkers(map) {
            console.log("Zoom to markers");
            const bounds = new window.google.maps.LatLngBounds();
           
            map.props.children.forEach((child) => {
                if (child.type === Marker) {
                    bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                }
            })
            map.fitBounds(bounds);
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap ref={props.zoomToMarkers} defaultZoom={5} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
        {props.markers.map((marker,id) => (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
            />
        ))}
    </GoogleMap>
);



