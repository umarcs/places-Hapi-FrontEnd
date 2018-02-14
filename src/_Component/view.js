import React, { Component } from 'react';
import { style } from 'typestyle';
import Signup from './signup';
import Login from './login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getCategories } from '../_Action/category'
import { places } from '../_Action/place';

const marginSearchBarNav = style({
    marginRight: '200px',
})
class View extends Component {
    constructor(){
        super();
        this.getCategoryList = this.getCategoryList.bind(this)
        this.getPlaces = this.getPlaces.bind(this)
    }
    getCategoryList(){
        this.props.getCategories()
    }
    getPlaces(id){
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
                                <button onClick ={ ()=>{this.getCategoryList()}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2" >
                                 {
                                     this.props.category.category.categories
                                  ?
                                    this.props.category.category.categories.map((data, id)=>{
                                       
                                        return <button key={id} onClick={()=>{this.getPlaces(data._id)}} className="dropdown-item" type="button">{data.title}</button>
                                    })
                                  :
                                  'aa'
                                }
                                    
                                </div>
                            </div>
                            <div className={marginSearchBarNav}>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                            <div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                <button className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Signup</button>
                                    {/* <a className="nav-link" href="http://www.google.com">Signup <span className="sr-only">(current)</span></a> */}
                                </li>
                                <li className="nav-item active">
                                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Login</button>
                                    {/* <a className="nav-link" href="http://www.google.com">Login <span className="sr-only">(current)</span></a> */}
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
    return bindActionCreators({ getCategories, places  }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(View)
