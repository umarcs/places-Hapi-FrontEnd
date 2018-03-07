import Request from 'superagent';
const queryString = require('query-string');
//var _ = require('lodash');

// //import { SubmissionError } from 'redux-form'
// //import config from '../config';

let apiBaseUrl = 'http://209.250.243.231:2002/api';

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

//get places
/**
 * 
//   * @param {*} query { c, q }
 */
export function getPlaces(query) {
    console.log("query: ", query)
    const queryParam = queryString.stringify(query);
    console.log('queryParam: ', queryParam)

    const url = `${apiBaseUrl}/places?${queryParam}`;
    return Request.get(url).then((response => {
        // console.log('response: ', response)
        return {
            type: "GET_PLACES",
            payload: response.body.places
        }
    }))
}
//get all places of one user
export function getPlacesOfOneUser(id) {
  
    const url = `${apiBaseUrl}/places/userId/${id}`;
    return Request.get(url).then((response => {
        // console.log('response: ', response)
        return {
            type: "GET_PLACES_OF_ONE_USER",
            payload: response.body.place
        }
    }))
}

export function getPlace(id) {
  
    const url = `${apiBaseUrl}/places/${id}`;
    return Request.get(url).then((response => {
        console.log('response: ', response)
        return {
            type: "GET_PLACE",
            payload: response.body.place
        }
    }))
}
export function addPlace(place) {
    let token= localStorage.getItem("token")
    const url = `${apiBaseUrl}/places`;
    return Request.post(url).send(place).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token }).then((response => {
        // console.log('response: ', response.body)
        return {
            type: "ADD_PLACE",
            payload: response.body.places
        }
    }))
}









