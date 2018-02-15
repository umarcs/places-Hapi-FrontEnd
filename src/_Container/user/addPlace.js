import React from 'react';
// import { bindActionCreators } from 'redux';
// import {login} from '../../_Action/user' 
import Place_Form from '../../_Component/user/addPlace'


class PlaceForm extends React.Component {
        constructor() {
            super();
        }
        handleSubmit(vals){
            alert(vals.email)
        }
       
        render() {
            return (
                <div>
                     <Place_Form onSubmit = { this.handleSubmit } /> 
                </div>
            )
        }
}

export default PlaceForm;