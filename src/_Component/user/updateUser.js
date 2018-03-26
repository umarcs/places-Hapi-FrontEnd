import React from 'react';
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import FlatButton from 'material-ui/FlatButton';

//import submit from '../../container/user-form//updateUser';
const errorColor = {
  color: 'red'
}
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
  return errors
}
const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <div>
    <br/>
    <label>{label}</label>
    <div>
      <input {...input} className="form-control" placeholder={label} type={type}/> {touched && error && <span style={errorColor}>{error}</span>}
    </div>
  </div>
)

let UpdateUserForm = props => {
  const {error, handleSubmit, pristine, reset, submitting} = props
  return (
    <div>
      <div className="container containerWidth">
        <div className="row">
          <div className="modal-body">
            <div className="card bg-faded card-block">
              <h3>Update Your Data</h3>
            </div>
            <br/>
            <div className="card bg-faded card-block">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <Field name="firstName" type="text" component={renderField} label="First Name"/>
                  </div>
                  <div className="col-md-6">
                    <Field name="lastName" type="text" component={renderField} label="Last Name"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <Field name="image" type="file" component={renderField} label="Image" />
                  </div>
                </div>
                <br/>
                <div className="col-md-9">
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
    </div>
  )
};

function mapStateProps(state) {
  return {users: state.user.login, initialValues: state.user.login}

}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
UpdateUserForm = reduxForm({form: "Update Form", validate, enableReinitialize: true})(UpdateUserForm)
export default connect(mapStateProps, matchDispatchToProps)(UpdateUserForm);
