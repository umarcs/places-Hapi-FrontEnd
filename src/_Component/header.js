import React, { Component } from 'react';
import { style } from 'typestyle';
import Signup from '../_Container/user/signup';
import Login from '../_Container/user/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { getCategories } from '../_Action/category'
import { getPlaces } from '../_Action/place';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import PlaceForm from '../_Container/user/addPlace';
import Map from './googleMap/map'
const div = style({
    marginTop: '60px',
})
var divStyle = {
    marginTop: "70px"
}
class View extends Component {
    constructor() {
        super();
        this.searchPlaces = this.searchPlaces.bind(this)
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectCat: null,
            inputVal: ''
        };

    }


    componentDidMount() {
        this.props.getCategories()
    }

    handleChange(event) {

        console.log(event.target.name, event.target.value)


        this.setState({
            [event.target.name]: event.target.value
        })

    }

    searchPlaces() {
        const { selectCat: c, inputVal: q } = this.state;
        let query = {};
        if (c) {
            query.c = c
        }
        if (q) {
            query.q = q
        }

        console.log("query is: ", query)
        this.props.getPlaces(query)
    }

    render() {
        console.log("this.props: ", this.state)
        return (
        
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Find Places</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">

                            <ul className="navbar-nav ml-auto">
                                <div className="dropdown">
                                    <select className="btn btn-secondary dropdown-toggle" name="selectCat" onClick={this.searchPlaces} value={this.state.selectCat} onChange={this.handleChange} >
                                        <option>Select Categories</option>
                                        {
                                            this.props.categories.map((data, id) => {
                                                return <option value={data._id} key={id}>{data.title}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                {/* search bar */}
                                <div className="container">
                                    <div className="row">
                                        <div id="custom-search-input">
                                            <div className="input-group col-md-12">
                                                <input type="text" name="inputVal" value={this.state.inputVal} onChange={this.handleChange} className="search-query form-control" placeholder="Search" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-danger" value="Search" onClick={this.searchPlaces} type="button">
                                                        <span className="fa fa-search"></span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end search bar */}
                                {/* login signup */}
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" data-target=".bd-example-modal-lg" href>Signup</a>
                                </li><li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" data-target=".bd-example-modal-sm" href>Login</a>
                                </li>
                                {/* end login signup */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page Content */}
                <div className="container" style={divStyle}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="list-group">
                                <Map
                                    zoom={16}
                                    center={{  lat: 30.231078, lng: 71.456956   }}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}

                                />
                            </div>
                        </div>
                        {/* /.col-lg-3 */}
                        <div className="col-lg-8">

                            <div className="row">
                                {
                                    this.props.places
                                        ?
                                        this.props.places.map((data, id) => {
                                            return <div className="col-lg-4 col-md-6 mb-4" key={id}>
                                                <div className="card h-100">
                                                    <a href="#"><img className="card-img-top" src="{data.logo}" alt /></a>
                                                    <div className="card-body">
                                                        <h4 className="card-title">
                                                            <button>{data.title} </button>
                                                        </h4>
                                                        <h5>$24.99</h5>
                                                        <p className="card-text">{data.description}</p>
                                                        <p className="card-text">{data.address}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                                                    </div>
                                                </div>
                                            </div>
                                        })

                                        :
                                        this.props.categories.map((data, id) => {
                                            return <div className="col-lg-4 col-md-6 mb-4" key={id}>
                                                <div className="card h-100">
                                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                                    <div className="card-body">
                                                        <h4 className="card-title">
                                                            <select className="btn btn-secondary " name="selectCat" onClick={this.searchPlaces} value={this.state.selectCat} onChange={this.handleChange} >
                                                                <option />
                                                                <option key={id} value={data._id} >{data.title}</option>
                                                            </select>
                                                        </h4>
                                                        <h5>$24.99</h5>
                                                        <p className="card-text">{data.details}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                                                    </div>
                                                </div>
                                            </div>
                                        })



                                }



                                {/* <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <button>Fashion</button>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="#">Item Two</a>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="#">Item Three</a>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="#">Item Four</a>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="#">Item Five</a>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="#">Item Six</a>
                                            </h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.col-lg-9 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                {/* Footer */}

                <Signup />
                <Login />
            </div>


        )
    }
}



function mapStateToProps(state) {
    console.log("state is here", state)
    return {
        categories: state.category.categories,
        places: state.places.places
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getCategories, getPlaces }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(View)















