'use strict'

import Request from 'superagent';
import  Axios from 'axios';

import { SubmissionError } from 'redux-form'
import _ from 'lodash';
import queryString from 'query-string';
// //import { SubmissionError } from 'redux-form'
// //import config from '../config';
let apiBaseUrl = 'http://localhost:2002/api';

//let apiBaseUrl = 'http://209.250.243.231:2002/api';

let apiBaseUrl = '/';
if(process.env.NODE_ENV == 'production') {
    apiBaseUrl = 'http://209.250.243.231:4000'
} else {
    apiBaseUrl = 'http://localhost:2002'
}


//get places
export function getPlaces(query) {
    console.log("query: ", query)
    const queryParam = queryString.stringify(query);
    console.log('queryParam: ', queryParam)

    const url = `${apiBaseUrl}/places?${queryParam}`;
    return Request.get(url).then((response => {
        // console.log('response: ', response)
        return {
            type: "GET_PLACES",
            payload: response.body.place
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

// get single place
function getPlaceInit() {
    console.log('Dispatching: ', 'getPlace')
    return {
        type: "GET_PLACE"
    }
}
function getPlaceSuccess(response) {
    console.log('Dispatching: ', 'getPlaceSuccess')
    return {
        type: "GET_PLACE_SUCCESS",
        payload: response.body.place
    }
}
function getPlaceFail(body) {
    console.log('Dispatching: ', 'getPlaceFail')
    return {
        type: "GET_PLACE_FAIL",
        payload: body.message
    }
}
export function getPlace(id) {
    return dispatch => {
        dispatch(getPlaceInit())

        const url = `${apiBaseUrl}/places/${id}`;

        return Request.get(url)
            .then(response => {
                console.log('response: ', response)
                dispatch(getPlaceSuccess(response))
            })
            .catch(err => {
                const { body } = err.response || {}
                dispatch(getPlaceFail(body))
            })
    }
}
export function addPlace(place) {
    console.log("place is>>>", place)
    let plPlace = _.pick(place, ['title', 'address', 'location', 'description', 'logo', 'category', 'user']);
    let token = localStorage.getItem("token")
    const url = `${apiBaseUrl}/places`;

    return Request
        .post(url)
        .send(plPlace)
        .set({ 'Authorization': 'Bearer' + token })
        .then((response => {
            const id = response.body.place._id;

            if (place.placeImage) {

                const formData = new FormData();
                formData.append('file', place.placeImage)
                let url = `${apiBaseUrl}/place/uploads/${id}`
                Request
                    .post(url)
                    //.set({ 'Authorization': 'Bearer' + token })
                    .send(formData)
                    .then(resp => {
                        return {
                            type: "ADD_PLACE",
                            payload: resp.body
                        }
                    })
            }
            else {
                return {
                    type: "ADD_PLACE",
                    payload: response
                }
            }
        }))
        .catch((err) => {
            const { body } = err.response || {};
            throw new SubmissionError({ _error: body.message })
        })
}

function updatePlaceInit() {

    console.log('Dispatching: ', "updatePlaceInit")
    return {
        type: "UPDATE_PLACE"
    }
}
function updatePlaceSuccess(response) {
    console.log('Dispatching: ', 'updatePlaceSuccess')
    return {
        type: "UPDATE_PLACE_SUCCESS",
        payload: response.body.place
    }
}
function updatePlaceFail(body) {
    console.log('Dispatching: ', 'updatePlaceFail')
    return {
        type: "UPDATE_PLACE_FAIL",
        payload: body.message
    }
}

export function updatePlace(place) {
    alert('before')
    return dispatch => {
        alert('after')
        dispatch(updatePlaceInit())

        console.log(">>>params>>>>>>>", place)

        let plPlace = _.pick(place, ['title', 'address', 'location', 'description', 'logo', 'category']);
        let token = localStorage.getItem("token")
        const id = place._id
        const url = `${apiBaseUrl}/places/${id}`;
        return Request.put(url)
            .set({ 'Authorization': 'Bearer' + token })
            .send(plPlace)
            .then((response => {

                console.log("in res ", response)

                if (!(place.placeImage == response.body.place.placeImage)) {
                    console.log("in if")

                    const formData = new FormData();
                    formData.append('file', place.placeImage)
                    let url = `${apiBaseUrl}/place/uploads/${id}`;
                    alert('after ')
                              
                    const config = {
                        headers: { 'content-type': 'multipart/form-data' }
                    }
                    Axios.post(url, formData, config)
                        .then(function(response) {
                            console.log(response);
                            alert("fff")
                        })
                        .catch(function(error) {
                            console.log(error);
                            //
                        });
                    // Request
                    //     .post(url)
                    //     //.set({ 'Authorization': 'Bearer' + token })
                    //     .send(formData)
                    //     .then(response => {

                    //         console.log('response:>>> ', response.body)
                    //         alert('befor image dispatch')
                    //         dispatch(updatePlaceSuccess(response))
                    //     })
                        // .on('progress', e => {
                        //     console.log('Percentage done: ', e.percent);
                        //     alert('in progres')
                        //     alert('>>', e.percent)
                        //  })
                        //  .end(res =>{
                        //      alert('in res')
                        //      alert(JSON.stringify(res.body))
                        //    if (res.ok) {
                        //      alert('yay got ' + JSON.stringify(res.body));
                        //    } else {
                        //      alert('Oh no! error ' + res.text);
                        //    }
                        //  })
                }
                else {

                    console.log("in else ")
                    dispatch(updatePlaceSuccess(response))
                }

            }))
            .catch(err => {
                const { body } = err.response || {}
                dispatch(updatePlaceFail(body))
            })
    }
}








