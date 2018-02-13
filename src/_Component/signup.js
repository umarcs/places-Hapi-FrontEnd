import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signup } from '../_Action/user'

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* sart */}
                            <div className="container">
                                <div className="row">
                                    <div className="modal-body">
                                        <div className="card bg-faded card-block">
                                            <h3>Create Account</h3>
                                        </div>
                                        <br />
                                        <div className="card bg-faded card-block">
                                            <form >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        Email <input type="text" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        Email <input type="text" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        Email <input type="text" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        Email <input type="text" />
                                                    </div>
                                                </div>

                                                <br />
                                                <div className="row">
                                                    <div className="col-md-1">
                                                    <button>signup</button>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {  

    return {
    signup: state.signup,
    };
}
function mapDispathToProps(dispatch) {
    return bindActionCreators({ signup }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Signup)

//export default Signup;

