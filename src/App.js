import React, { Component } from 'react';
import Home from './_Container/home';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';

import dashboard from './_Component/dashboard/body'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDataByToken } from './_Action/user'
import { getCategories } from './_Action/category'

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.getUserDataByToken();
      this.props.getCategories()

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
                <Redirect from="/" exact to="/dashboard" />
                :
                <Redirect from="/dashboard" exact to="/" />
            }
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={dashboard} />


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
  return bindActionCreators({ getUserDataByToken, getCategories }, dispatch)
}
export default connect(null, mapDispathToProps)(App);