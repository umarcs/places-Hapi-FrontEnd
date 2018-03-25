import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import GoogleMap from './googleMap'
import SelectField from 'material-ui/SelectField';
import { Field, reduxForm } from 'redux-form';
import queryString from 'query-string';
import FlatButton from 'material-ui/FlatButton';
import { style } from 'typestyle';

const errorColor = {
    color: "red"
}

const validate = values => {
    console.log("vals>>>>>",values)
    const errors = {}
    const requiredFields = ['category']
    if (!values.category) {
        errors.category = 'Required'
    }
    if (!values.lat) {
        errors.lat = 'Required'
    }
    if (!values.title) {
        errors.title = 'Required'
    }
  
    if (!values.address) {
        errors.address = 'Required'
    }
    // if (!values.images) {
    //     errors.images = 'Required'
    // }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.logo) {
        errors.logo = 'Required'
    }

    return errors
}


const PlacesForm = props => {

    const { error, handleSubmit, pristine, reset, submitting, setLatLng } = props
   console.log("setLatLng", setLatLng)
    let initialLatLng = props.initialValues ? props.initialValues.location : null;
    //console.log("initial vals>>>", initialLatLng)


    return (
        <div>
            <div className="container containerWidth">
                <div className="row">
                    <div className="modal-body">
                        <div className="card bg-faded card-block">
                            <h3>Update Your Place</h3>
                        </div>
                        <br />
                        <div className="card bg-faded card-block">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="dropdown">
                                            <Field
                                                name="category"
                                                component={renderSelectField}
                                                label="Select Category"
                                            >
                                                <MenuItem primaryText="Select Category" />
                                                {
                                                    props.categories.map((categories, i) => {
                                                        return <MenuItem key={i} value={categories._id} primaryText={categories.title} />
                                                    })
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Field name="title" type="text" component={renderField} label="Title" />
                                    </div>
                                    <div className="col-md-6">
                                        <Field name="address" type="text" component={renderField} label="Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        
                                        <Field name="images" type="file" component={renderField} label="Image" />
                                    </div>
                                    <div className="col-md-6">
                                        <Field
                                            name="description"
                                            type="text"
                                            component={renderField}
                                            label="Description" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Field name="logo" type="text" component={renderField} label="Logo" />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '40px' }}>
                                    <div className="col-md-12">
                                        <GoogleMap setLatLng={setLatLng} initialLatLng={initialLatLng} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        {error && <strong style={{ color: 'red' }}>{error}</strong>}
                                    </div>
                                </div>
                                <br />
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
const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (

    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom} />
)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <br />
        <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type} /> {touched && error && <span style={errorColor}>{error}</span>}
        </div>
    </div>
)

function mapStateToProps(state) {
    return { categories: state.category.categories };
}

const UpdatePlace = reduxForm({
    form: "UpdatePlace",
    validate,
    enableReinitialize: true,
})(PlacesForm)
export default connect(mapStateToProps)(UpdatePlace);
