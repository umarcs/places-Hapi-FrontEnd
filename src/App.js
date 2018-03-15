import React, { Component } from 'react';
import Home from './_Component/home/body';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import UserDashboard from './_Component/dashboard/body'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDataByToken } from './_Action/user'
import { getCategories } from './_Action/category'

import addPlace from './_Component/user/addPlace'
import userPlaces from './_Component/user/userPlaces'
import updateUser from './_Container/user/updateUser';
import updatePlace from './_Component/user/updatePlace';
import profile from './_Component/user/profile';
import placeDetail from './_Component/places/details'
import placesList from './_Component/places/places';
import categories from './_Component/categories/categories'

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.getUserDataByToken(); 
      this.props.getCategories();
     

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
                  {/* <Redirect exact to='/profile' from='/'  /> */}
                  <Route exact path="/profile" component={profile} />                  
                  <Route exact path="/profile/update-profile" component={updateUser} />
                  <Route exact path="/places" component={userPlaces} />
                  <Route exact path="/places/add-place" component={addPlace} />
                  <Route exact path="/places/update-place/:pId" component={updatePlace} />
                  
                </UserDashboard>
                :
                  ''
                //  <Redirect to="/"  />
                
            }
            <Home>
            <Route exact path="/" component={categories} />
              <Route exact path="/places-list" component={placesList} />
              <Route exact path="/places/d/:pId" component={placeDetail} />
            </Home>
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