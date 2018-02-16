import React, { Component } from 'react';
import View from './_Container/view';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';

import profile from './_Component/user/Profile'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDataByToken } from './_Action/user'

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
        this.props.getUserDataByToken()
    }
}
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            
          
            {
              (localStorage.getItem("token"))
                ?
                <Redirect from="/" exact to='/profile' />
                :
                <Redirect from="/profile" exact to='/' />
            }
            <Route exact path='/' component={View} />
            <Route exact path='/profile' component={profile} />


            <Route path='*' render={() =>
              <p>
                <div className="card bg-faded card-block">
                  <div className="row">
                    <h1>Not Found</h1>
                  </div>
                </div>
              </p>}
            />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



function mapDispathToProps(dispatch) {
  return bindActionCreators({ getUserDataByToken }, dispatch)
}
export default connect(null, mapDispathToProps)(App);