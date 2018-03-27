import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPlace} from '../../_Action/place';
import queryString from 'query-string'

class Place_Detail extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const {params} = this.props.match;
        this.props.getPlace(params.pId)
    }

    render() {
        const place = this.props.place;
        console.log('place: place: ', place)
        if (!place) {
            return (
                <div>loading...</div>
            )
        }
        return (
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-md-3">
                        <a href="">
                            <img
                                className="img-fluid rounded mb-3 mb-md-0"
                                src={`http://localhost:3006/places/${this.props.place.placeImage}`}                                alt/>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <h3>{place.title}</h3>
                        <p>{place.description}</p>
                        <a className="btn btn-primary">View Location</a>
                    </div>
                </div>
            </div>
        )
       
    }
}

function mapStateToProps(state) {
    return {categories: state.category.categories, place: state.places.place};
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getPlace
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Place_Detail)
