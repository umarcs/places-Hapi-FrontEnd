'use strict'

import Request from 'superagent';
import { SubmissionError } from 'redux-form'
import _ from 'lodash';
import queryString from 'query-string';

// //import { SubmissionError } from 'redux-form'
// //import config from '../config';
let apiBaseUrl = 'http://localhost:2002/api';

//let apiBaseUrl = 'http://209.250.243.231:2002/api';

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

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

export function updatePlace(place) {
    console.log("params>>>>>>>", place)
    let plPlace = _.pick(place, ['title', 'address', 'location', 'description', 'logo', 'category']);
    let token = localStorage.getItem("token")
    const id = place._id
    const url = `${apiBaseUrl}/places/${id}`
    return Request.put(url)
        .set({ 'Authorization': 'Bearer' + token })
        .send(plPlace)
        .then((response => {
            console.log("in res ", response)

            if (!(place.placeImage == response.body.place.placeImage)) {

                const formData = new FormData();
                formData.append('file', place.placeImage)
                let url = `${apiBaseUrl}/place/uploads/${id}`
                Request
                    .post(url)
                    //.set({ 'Authorization': 'Bearer' + token })
                    .send(formData)
                    .then(response => {
                        return {
                            type: "UPDATE_PLACE",
                            payload: response
                        }
                    })
            }
            else {
                console.log("in else ")

                return {
                    type: "UPDATE_PLACE",
                    payload: response
                }
            }

        }))
        .catch((err) => {
            const { body } = err.response || {};
            throw new SubmissionError({ _error: body.message })
        })

}








