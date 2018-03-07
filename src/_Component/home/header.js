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

const div = style({
    marginTop: '60px',
})
var divStyle = {
    marginTop: "70px"
}
class View extends Component {
    constructor(props) {
        super(props);
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
                        <a className="navbar-brand" href="/">Find Places</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">

                            <ul className="navbar-nav ml-auto">
                                <div className="dropdown">
                                <Link to={`/places?c=${this.state.selectCat}`}>
                                    <select className="btn btn-secondary dropdown-toggle" name="selectCat" onClick={this.searchPlaces} value={this.state.selectCat} onChange={this.handleChange} >
                                        <option>Select Categories</option>
                                        {
                                            this.props.categories.map((data, id) => {
                                                return <option value={data._id} key={id}>{data.title}</option>
                                            })
                                        }
                                    </select>
                                    </Link>
                                </div>
                                {/* search bar */}
                                <div className="container">
                                    <div className="row">
                                        <div id="custom-search-input">
                                            <div className="input-group col-md-12">
                                                <input type="text" name="inputVal" value={this.state.inputVal} onChange={this.handleChange} className="search-query form-control" placeholder="Search" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-danger"  value="Search" onClick={this.searchPlaces} type="button">
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















