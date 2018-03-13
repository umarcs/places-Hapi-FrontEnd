import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {getPlace, updatePlace} from '../../_Action/place';
import queryString from 'query-string';
import FlatButton from 'material-ui/FlatButton';

//import submit from '../../container/user-form//updateUser';
const errorColor = {
    color: "red"
}
const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.images) {
        errors.images = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.logo) {
        errors.logo = 'Required'
    }

    return errors
}

const required = value => value
    ? undefined
    : 'Required';
class UpdatePlace extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.state = {
            selectCat: null
        };
    }

    componentDidMount() {
        // console.log('PLACE MOUNTED:::: >>> ', this.props)
        const {params} = this.props.match;

        this
            .props
            .getPlace(params.pId)
    }
    handleChange(event) {
        this.setState({selectCat: event.target.value})
    }
    onSubmit(place) {
        place.category = this.state.selectCat
        this
            .props
            .updatePlace(place)
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        // let selectCat = category._id;

        return (
            <div>
                <div className="container containerWidth">
                    <div className="row">
                        <div className="modal-body">
                            <div className="card bg-faded card-block">
                                <h3>Update Your Place</h3>
                            </div>
                            <br/>
                            <div className="card bg-faded card-block">
                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="dropdown">
                                                <Field
                                                    className="btn btn-default"
                                                    name="category._id"
                                                    component="select"
                                                    onChange={this.handleChange}>

                                                    {this
                                                        .props
                                                        .categories
                                                        .map((data, id) => {
                                                            return <option value={data._id} key={id}>{data.title}</option>
                                                        })
                                                    }
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="title" type="text" component={renderField} label="Title"/>
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="address" type="text" component={renderField} label="Address"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="images" type="text" component={renderField} label="Image"/>
                                        </div>
                                        <div className="col-md-6">
                                            <Field
                                                name="description"
                                                type="text"
                                                component={renderField}
                                                label="Description"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="logo" type="text" component={renderField} label="Logo"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <button className="btn btn-success" type="submit" disabled={submitting}>Update</button>
                                            </div>
                                            <div className="col-md-2">
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    disabled={pristine || submitting}
                                                    onClick={reset}>
                                                    Clear Values
                                                </button>
                                            </div>
                                            <div className="col-md-2">
                                                <FlatButton>
                                                    <Link to="/places">Back to profile</Link>
                                                </FlatButton>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

const renderField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error
    }
}) => (
    <div>
        <br/>
        <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type}/> {touched && error && <span style={errorColor}>{error}</span>}
        </div>
    </div>
)

function mapStateToProps(state) {
    console.log("state is here>>>>", state.places.place)
    return {categories: state.category.categories, place: state.places.place, initialValues: state.places.place};
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getPlace,
        updatePlace
    }, dispatch)
}
UpdatePlace = reduxForm({form: "Update Place", validate, enableReinitialize: true})(UpdatePlace)
export default connect(mapStateToProps, mapDispathToProps)(UpdatePlace);
