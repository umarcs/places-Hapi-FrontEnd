import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addPlace } from '../../_Action/place';
import queryString from 'query-string'

//import submit from '../../container/user-form//updateUser';
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




const required = value => value ? undefined : 'Required';
class UpdatePlace extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectCat: null,
        };
    }
    componentDidMount() {
        const id = this.props.match.params.pId;
       
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(place){
        place.category = this.state.selectCat
        this.props.addPlace(place)
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props


        return (
            <div className="container  ">
                <div className="card bg-faded card-block ">
                    <h2>Update Place</h2>
                </div>
                <div className=" card bg-faded card-block">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="row">
                            <div className="dropdown">

                                <select name="selectCat" value={this.state.selectCat} onChange={this.handleChange} >
                                    <option >Choose Category</option>
                                    {
                                        this.props.categories.map((data, id) => {
                                            return <option value={data._id} key={id}>{data.title}</option>
                                        })
                                    }
                                </select>

                            </div>
                            <div className="col-md-12">

                                <div className="col-md-6">
                                    <Field
                                        name="title"
                                        type="text"
                                        component={renderField}
                                        label="Title"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Field
                                        name="address"
                                        type="text"
                                        component={renderField}
                                        label="Address"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Field
                                        name="images"
                                        type="text"
                                        component={renderField}
                                        label="Image"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Field
                                        name="description"
                                        type="text"
                                        component={renderField}
                                        label="Description"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Field
                                        name="logo"
                                        type="text"
                                        component={renderField}
                                        label="Logo"
                                    />
                                </div>
                            </div>
                            </div>
                            <div classeName="row">
                                <div className="col-md-12">
                                    <div className="col-md-2">
                                        <button primary={true} className="btn btn-success" type="submit" disabled={submitting}>UpdatePlace </button>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>
                                    </div>
               
                                </div>
                            </div>
                        
                    </form>
                </div>
            </div>
        )
    };
}


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <br /> <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type} />
            {touched && error && <span className="error-color">{error}</span>}
        </div>
    </div>
)

function mapStateToProps(state) {
    console.log("state is here", state.category.categories)
    return {
        categories: state.category.categories,
        initialValues: state.category.categories

    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ addPlace }, dispatch)
}
UpdatePlace = reduxForm({
    form: "Update Form",
    validate,
    enableReinitialize: true
    
})(UpdatePlace)
export default connect(mapStateToProps, mapDispathToProps)(UpdatePlace);





