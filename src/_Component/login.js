import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                        <div className="container containerWidth">
                            <div className="row">
                                <div className="modal-body">
                                <div className="card bg-faded card-block">
                                    <h3>Login</h3>
                                </div>
                                <div className="card bg-faded card-block">
                                    Email <input type="text" />
                                    Password <input type="text" /> 
                                        <button>login</button>

                                </div>
                               

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Login;






