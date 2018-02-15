import React, { Component } from 'react';
import { style } from 'typestyle';
import Signup from '../_Container/user/signup';
import Login from '../_Container/user/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import { getCategories } from '../_Action/category'
import { places } from '../_Action/place';
const marginSearchBarNav = style({
    marginRight: '200px',
})
class View extends Component {
    constructor() {
        super();
        this.getCategoryList = this.getCategoryList.bind(this)
        this.getPlaces = this.getPlaces.bind(this)
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.handleSubmit.bind(this);

    }


   
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert( this.state.value);
    this.props.places(this.state.value)
    event.preventDefault();
  }
    getCategoryList() {
        this.props.getCategories()
    }
    getPlaces(id) {
        this.props.places(id)
    }
    render() {
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
                                <button  onClick={() => { this.getCategoryList() }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                {
                                    this.props.category.category.categories
                                        ?
                                        this.props.category.category.categories.map((data, id) => {

                                            return <button key={id} onClick={() => { this.getPlaces(data._id) }} className="dropdown-item" type="button" >{data.title}</button>
                                        })
                                        :
                                        'aa'
                                }
                                </div>
                            </div>
                           
                            <div className={marginSearchBarNav}>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                         <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>

                            </div>
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <button className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Signup</button>
                                    </li>
                                    <li className="nav-item active">
                                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Login</button>
                                    </li>
                                    <li className="nav-item active">
                                        {/* <Link to="/dashboard">Back</Link> */}
                                        <button type="button" className="btn btn-outline-primary" >Add PLace</button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Map */}

                <div>
                    <div className="modal-body">
                        <div className="card bg-faded card-block">
                            <Signup />
                            <Login />
                            {/* <PlaceForm /> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



function mapStateToProps(state) {

    return {
        category: state.category,
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getCategories, places }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(View)
