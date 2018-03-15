import React, {Component} from 'react';
import {style} from 'typestyle';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {BrowserRouter, Route, Switch, Link, history} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {getCategories} from '../../_Action/category'
import {getPlaces} from '../../_Action/place';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import PlaceForm from '../../_Container/user/addPlace';
const div = style({marginTop: '60px'})
const divStyle = {
    marginTop: "70px"
}
class Home extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <div className="row">
                    {this.props.categories
                        ? this
                            .props
                            .categories
                            .map((category, i) => {
                                return <div className="col-lg-4 col-md-6 mb-4" key={i}>
                                    <div className="card h-100">
                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt/></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <Link to={`/places-list?c=${category._id}`}>
                                                    {category.title}
                                                </Link>
                                            </h4>
                                            {/* <h5>$24.99</h5> */}

                                            <p className="card-text">{category.details}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                            })
                        : "Categories Not Found"
}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("state is here", state)
    return {categories: state.category.categories, places: state.places.places};
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getCategories,
        getPlaces
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
