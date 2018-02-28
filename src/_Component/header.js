import React, { Component } from 'react';
import { style } from 'typestyle';
import Signup from '../_Container/user/signup';
import Login from '../_Container/user/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import { getCategories } from '../_Action/category'
import { getPlaces } from '../_Action/place';
import PlaceForm from '../_Container/user/addPlace'
const marginSearchBarNav = style({
    marginRight: '200px',
})
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
                <div>
                    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="http://www.google.com">PLACES LOGO</a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <div className="dropdown">
                                <select name="selectCat" onClick={this.searchPlaces} value={this.state.selectCat}  onChange={this.handleChange} >
                                    <option />
                                    {
                                        this.props.categories.map((data, id) => {
                                            return <option  value={data._id} key={id}>{data.title}</option>
                                        })
                                    }
                                </select>
                              

                            </div>

                            <div className={marginSearchBarNav}>
                                <label>
                                    <input type="text" name="inputVal" value={this.state.inputVal} onChange={this.handleChange} />
                                </label>
                                <input type="button" value="Search" onClick={this.searchPlaces} />
                                {/* </form> */}

                            </div>
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <button className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Signup</button>
                                    </li>
                                    <li className="nav-item active">
                                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Login</button>
                                    </li>
                                    

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Map */}

                <Signup />
                <Login />
            </div>

        )
    }
}



function mapStateToProps(state) {
    //console.log("state is here", state)
    return {
        categories: state.category.categories,
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getCategories, getPlaces }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(View)
