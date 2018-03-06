import React from 'react';
import { bindActionCreators } from "redux";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

//import submit from '../../container/user-form//updateUser';
const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.firstName)) {
    errors.firstName = 'Invalid First Name'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.lastName)) {
    errors.lastName = 'Invalid Last Name'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
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


let UpdateUserForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  console.log("edded", error)
  return (

    <div className="container  ">
      <div className="card bg-faded card-block ">
        <h2>Update Account</h2>
      </div>
      <div className=" card bg-faded card-block">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">

              <div className="col-md-6">
                <Field
                  name="firstName"
                  type="text"
                  component={renderField}
                  label="First Name"
                />
              </div>
              <div className="col-md-6">
                <Field
                  name="lastName"
                  type="text"
                  component={renderField}
                  label="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-2">
                  <br /><button className="btn btn-success" type="submit"disabled={pristine || submitting}>Update </button>
                </div>
                <div className="col-md-2">
                  <br /><button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>
                </div>
                <div className="col-md-10">
                  <br /> <br />  <Link to="/dashboard">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

function mapStateProps(state) {
  console.log("data hi data", state)
  return {
    users: state.user.login,
    initialValues: state.user.login
  }

}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
UpdateUserForm = reduxForm({
  form: "Update Form",
  validate,
  enableReinitialize: true
})(UpdateUserForm)
export default connect(mapStateProps, matchDispatchToProps)(UpdateUserForm);



