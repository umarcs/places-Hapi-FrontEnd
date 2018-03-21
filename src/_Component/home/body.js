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

import Header from './header';
import Footer from './footer'
// import Places from '../places/placesForm'
// import Categories from '../categories/categories'

import MyMapComponent from '../googleMap/map';
var _ = require('lodash');

const pos = {
    position: "sticky"
}

const div = style({ marginTop: '60px' })
const divStyle = {
    marginTop: "70px"
}
class Home extends Component {
    constructor(props) {
        super()
        
    }
    componentDidMount(){

    }

    // componentWillReceiveProps(nextProps){
    //     console.log('Body: ', this.props);
        
    //     console.log("nextProps", nextProps)
    // }

render() {
    let zoom= 4
    console.log("this.props.location.pathname", this.props.location.pathname)
    let places = [{location:{lat: 30.07154734201247, lng: 69.08144412499996}}];
    if (this.props.location.pathname == '/places') {
        places = this.props.places;
        zoom = 20

    } 
    else if (this.props.location.pathname.indexOf('/places/d/') == 0) {
        places = this.props.place ? [this.props.place] : [];
        zoom = 18
    }
    return (
        <div className="container-fluid h-100">
            <Header />
            <div className="row h-100">
                <div className="col-sm-4 col-2 h-100 py-2 fixed-top" id="left">
                    <div>
                        <MyMapComponent
                            places={places}
                            zoom={zoom}
                        />
                    </div>
                </div>
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
    return {
        categories: state.category.categories,
        places: state.places.places,
        place: state.places.place
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getCategories,
        getPlaces
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Home)