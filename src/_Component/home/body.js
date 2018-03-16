import React, { Component } from 'react';
import { style } from 'typestyle';
import Signup from '../../_Container/user/signup';
import Login from '../../_Container/user/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { getCategories } from '../../_Action/category'
import { getPlaces } from '../../_Action/place';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import PlaceForm from '../../_Container/user/addPlace';

import Header from './header';
import Footer from './footer'
import Places from '../places/places'
import Categories from '../categories/categories'

import Map from '../googleMap/map'
const pos = {
    position: "sticky"
}
const div = style({ marginTop: '60px' })
const divStyle = {
    marginTop: "70px"
}
class Home extends Component {
    render() {
        return (
            // <div>
            //     <Header />
            //     <div className="container" style={divStyle}>
            //         <div className="row">
            //             <div className="col-lg-4">
            //                 <div className="list-group sticky-top" style={pos}>
            //                     <Map
            //                         zoom={16}
            //                         center={{
            //                             lat: 30.231078,
            //                             lng: 71.456956
            //                         }}
            //                         containerElement={<div style={{ height: `400px` }} />}
            //                         mapElement={<div style={{ height: `100%` }} />} />
            //                 </div>
            //             </div>
            //             {this.props.children}
            //         </div>
            //     </div>
            //     <Footer />
            // </div >

         

                        <div className="container-fluid h-100">
                        <Header />
                            <div className="row h-100">
                                <div className="col-sm-4 col-2 h-100 py-2 fixed-top"  id="left">
                                    <div>
                                    <Map
                                        zoom={16}
                                        center={{
                                            lat: 30.231078,
                                            lng: 71.456956
                                        }}
                                        containerElement={<div style={{ height: `680px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />} />
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 invisible col-2">hidden spacer</div> */}
                                <div className="col offset-2 offset-sm-4 py-2" style={{ marginTop: `50px` }}>
                                {this.props.children}
                                </div>
                            </div>
                            <Footer />
                        </div>
         
        )
    }
}

function mapStateToProps(state) {
    // console.log("state is here", state)
    return { categories: state.category.categories, places: state.places.places };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getCategories,
        getPlaces
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
