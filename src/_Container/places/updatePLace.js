import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePlace, getPlace } from '../../_Action/place';
import PlaceForm from '../../_Component/places/placesForm'


class Update_Place extends React.Component {
     constructor() {
          super();
     }
     handleSubmit(place) {
        return updatePlace(place)
     }
     
     // componentWillReceiveProps(nextProps) {
     //      if(this.props.places.place && !nextProps.places.place) {
     //           console.log("next props is<>>>", this.props.places.place )
     //      //  initialValues this.props.places.place
     //      // console.log("initialValues", initialValues
     //      }
     //  }

     componentDidMount() {
     //     const initialValues = this.props
     //     console.log("initialValues", initialValues)
          //  console.log('PLACE MOUNTED:::: >>> ', this.props.location.search)
          // const rawURL = this.props.location.search;
          //  query = queryString.parse(rawURL);)
          const id = this.props.match.params.pId
          this.props.getPlace(id)
     }

     render() {
          let initVals = {}
          if (this.props.place) {
               initVals = this.props.place
          }
          return (
               <div>
                    <PlaceForm onSubmit={this.handleSubmit} initialValues={initVals}  />
               </div>
          )
     }
}
function mapStateToProps(state) {
     console.log("initialValues", state.places.place)
     return {
         place : state.places.place
     }
 }

function mapDispathToProps(dispatch) {
     return bindActionCreators({ updatePlace, getPlace }, dispatch)
}


export default connect(mapStateToProps, mapDispathToProps)(Update_Place)
//export default PlaceForm;