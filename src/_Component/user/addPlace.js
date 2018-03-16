import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addPlace } from '../../_Action/place';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { style } from 'typestyle';

import SelectField from 'material-ui/SelectField';

const errorColor = {
    color: "red"
}

const validate = values => {
    const errors = {}
    const requiredFields = ['selectCat']
    if (!values.selectCat) {
        errors.selectCat = 'Required'
    }
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
class AddPlace extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectCat: null,
            bError : null,
            bSucess : null
        };
    }
    handleChange(event, index, value) {
        //console.log("popo", event, index, value, event.target)
        this.setState({
            'selectCat': value
        })
    }
    onSubmit(place) {
        place.category = this.state.selectCat
        place.user = this.props.user._id;
        console.log("promise>>", this.props.addPlace(place))
        this.props.addPlace(place)
        .then(pass=>{
            console.log("resolve")
            this.setState({
                bSucess : "Place Added Sucessfully"
            })
        })
        .catch(err=>{
            var bError = err.response.body.message;
            this.setState({
                bError 
            })
        })
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;
        //console.log("error>>>", error)
        return (
            <div className="container containerWidth">
                <div className="row">
                    <div className="modal-body">
                        <div className="card bg-faded card-block">
                            <h3>Add Place</h3>
                        </div>
                        <br />
                        <div className="card bg-faded card-block">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field name="selectCat"
                                    value={this.state.selectCat}
                                    onChange={this.handleChange}
                                    component={renderSelectField}
                                    label="Select Category"
                                >
                                    <MenuItem value={this.state.selectCat} primaryText="Select Category" />
                                    {
                                        this.props.categories.map((categories, i) => {
                                            return <MenuItem key={i} value={categories._id} primaryText={categories.title} />
                                        })
                                    }
                                </Field>
                                <div className="dropdown">
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
                                        <Field name="images" type="text" component={renderField} label="Image" />
                                    </div>
                                    <div className="col-md-6">
                                        <Field name="description" type="text" component={renderField} label="Description" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Field name="logo" type="text" component={renderField} label="Logo" />
                                    </div>

                                </div>
                                {this.state.bError
                                 ?
                                 <strong style={{color :'red'}}>{this.state.bError}</strong>
                                 :
                                 this.state.bSucess
                                 ?
                                  <strong style={{color :'green'}}>asdasdas</strong>
                                  :
                                  ''
                                
                                 
                                }  
                                <br />
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <button primary={true} className="btn btn-success" type="submit" disabled={pristine || submitting}>Add Place </button>

                                        </div>
                                        <div className="col-md-2">
                                            <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>  Clear Values
                                         </button>
                                        </div>
                                        <div className="col-md-3">
                                            <FlatButton>
                                                <Link to="/profile">Back to profile</Link>
                                            </FlatButton>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

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
        <br /> <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type} />
            {touched && error && <span style={errorColor}>{error}</span>}
        </div>
    </div>
)

function mapStateToProps(state) {
    //console.log("state is here", state.user.login)
    return {
        categories: state.category.categories,
        user: state.user.login
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ addPlace }, dispatch)
}
AddPlace = reduxForm({
    form: "Update Form",
    validate,
    // validate2
})(AddPlace)
export default connect(mapStateToProps, mapDispathToProps)(AddPlace);





