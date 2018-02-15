import Request from 'superagent';
//var _ = require('lodash');

// //import { SubmissionError } from 'redux-form'
// //import config from '../config';

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

 //get places
export function places(id){  
    console.log("iddddd", id)
    const url = `http://localhost:2002/api/places?c=${id}`;
    return  Request.get(url).then((response=>{
        return{
            type : "GET-PLACES",
            payload : response.body
        }
    }))
}





   



