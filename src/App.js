import React, { Component } from 'react';
import View from './_Container/view';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';

import PlaceForm from './_Container/user/addPlace'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch > { /* {(this.props.UserReducers.login) ? <Redirect from="/login"  exact  to='/dashboard' /> : <Redirect from="/dashboard"  exact  to='/login' /> }  */} { /* <Route  path="/dashboard" exact component={dashboard} /> */}


            <Route path='/dashboard' component={View} />

            <Route path='/' render={() =>
              <p>
              <div className="card bg-faded card-block">
              <div className="row">
              <h1>WELCOME</h1>
              </div>
              </div>
              <h4><Link to="/dashboard">Go</Link></h4>
              </p>} 
              />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
