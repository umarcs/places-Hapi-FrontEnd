import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPlace } from '../../_Action/place';
import PlaceForm from '../../_Component/places/placesForm'


class AddPlace extends React.Component {
     constructor() {
          super();
     }
     handleSubmit(place) {
          if(this.props.user ){
               
               place.user = this.props.user._id;
          }
        return addPlace(place)
     }

     render() {
          return (
               <div>
                    <PlaceForm onSubmit={this.handleSubmit.bind(this)}  />
               </div>
          )
     }
}

function mapStateToProps(state) {
     console.log("user>>", state)
     return {
         user: state.user.login
     }
 }
function mapDispathToProps(dispatch) {
     return bindActionCreators({ addPlace }, dispatch)
}


export default connect(mapStateToProps, mapDispathToProps)(AddPlace)
//export default PlaceForm;