import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { debug } from 'util';

import { getPlace } from '../../_Action/place';
import queryString from 'query-string'


class Place_Detail extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log('PLACE MOUNTED:::: >>> ', this.props)
        const { params } = this.props.match;
        
        // console.log('componentDidMount Places>>>>>>>>>>>>>>>>>>>>>>>>>', params)
        // console.log(rawURL);
        this.props.getPlace(params.pId)
    }

    render() {
        return (
            <div className="col-lg-8">

                <div className="row">
                    <div className="col-md-3">
                        <a href="">
                            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <h3>{this.props.place.title}</h3>
                        <p>{this.props.place.description}</p>
                        <a className="btn btn-primary" href="#">View Location</a>
                    </div>

                </div>
            </div>





        )
    }
}



function mapStateToProps(state) {
    return {
        categories: state.category.categories,
        place: state.places.place
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ getPlace }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Place_Detail)
    //export default Details;













