import React, {Component} from 'react';
import {style} from 'typestyle';
import Signup from '../../_Container/user/signup';
import Login from '../../_Container/user/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {getCategories} from '../../_Action/category'
import {getPlaces} from '../../_Action/place';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import PlaceForm from '../../_Container/user/addPlace';
import queryString from 'query-string'

const div = style({marginTop: '60px'})
const divStyle = {
    marginTop: "70px"
}
class Places extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const rawURL = this.props.location.search;
        const params = queryString.parse(rawURL);
        this
            .props
            .getPlaces(params)
    }

    render() {
        return (
            <div className="col-lg-8">
                <div className="row">
                    {this.props.places
                        ? this
                            .props
                            .places
                            .map((place, i) => {
                                return <div className="col-lg-4 col-md-6 mb-4" key={i}>
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x300" alt/></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <Link to={`/places/d/${place._id}`}>{place.title}
                                                </Link>
                                            </h4>
                                            <p className="card-text">{place.description}</p>
                                            <p className="card-text">{place.address}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>

                            })
                        : "Not Found Places"
                    }
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {categories: state.category.categories, places: state.places.places};
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getPlaces
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Places)
