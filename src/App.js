import React, { Component } from 'react';
import Home from './_Container/home';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect, Prompt } from 'react-router-dom';
import { NestedRoute, SubRoute } from 'react-nested-route'

import UserDashboard from './_Component/dashboard/body'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDataByToken } from './_Action/user'
import { getCategories } from './_Action/category'

import addPlace from './_Component/user/addPlace'
import userPlaces from './_Component/user/userPlaces'
import updateUser from './_Container/user/updateUser';
import updatePlace from './_Component/user/updatePlace';
import dashboard from './_Component/user/profile';

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.getUserDataByToken();``
      this.props.getCategories();
      <Redirect to='/dashboard' from='/' />

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
                <UserDashboard>
                  {/* <Redirect to='/dashboard'  /> */}
                  <Route exact path="/dashboard/addPlace" component={addPlace} />
                  <Route exact path="/dashboard/userPlaces" component={userPlaces} />
                  <Route exact path="/dashboard/updateUser" component={updateUser} />
                  <Route exact path="/dashboard/updatePlace" component={updatePlace} />
                  <Route exact path="/dashboard" component={dashboard} />     
                </UserDashboard>
              :
                <Redirect  to="/" from='/dashboard' />

            }
             <Route exact path="/" component={Home} />




            {/* <Route path='*' render={() =>
                <p>
                  <div className="card bg-faded card-block">
                    <div className="row">
                      <h1>Not Found</h1>
                    </div>
                  </div>
                </p>}
              /> */}


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