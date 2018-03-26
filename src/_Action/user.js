import Request from 'superagent';
import { SubmissionError } from 'redux-form'
import _ from 'lodash';
let apiBaseUrl = 'http://localhost:2002/api';

//let apiBaseUrl = 'http://209.250.243.231:2002/api';
// console.log('process.env: ', process.env)
// if(process.env.NODE_ENV == 'production') {
//     apiBaseUrl = 'http://209.250.243.231:4000'
// } else {
//     apiBaseUrl = 'http://localhost:2002'
// }

export function signup(user) {
    const url = `${apiBaseUrl}/user/signup`;
    return Request.post(url).send(user).then((Response => {
        return {
            type: "SIGN_UP",
            payload: Response.body
        }
    }))
        .catch((err) => {
            const { body } = err.response || {};
            throw new SubmissionError({ _error: body.message })
        })
}

export function login(user) {
    const url = `${apiBaseUrl}/user/login`;
    return Request.post(url).send(user).then((Response => {
        localStorage.setItem("token", Response.body.token);

        return {
            type: "LOG_IN",
            payload: Response.body
        }
    }))
        .catch((err) => {
            const { body } = err.response || {};

            throw new SubmissionError({ _error: body.message })
        })
}

export function update(user) {
    console.log("user ", user)
    const { _id: id } = user;
    let token = localStorage.getItem("token")
    let plUser = _.pick(user, ['firstName', 'lastName']);
    let userProfile_Pic =  user.profilePicture;
    let userProfile_Pic_name =  user.profilePicture.name;

    console.log("user ", user)
    
    const url = `${apiBaseUrl}/user/${id}`
    return Request
        .put(url)
        .set({ 'Authorization': 'Bearer ' + token })
        .send(plUser)
        .then(resp => {
            console.log("plUser", plUser)
            if (!(user.profilePicture==resp.body.profilePicture)) {

                const formData = new FormData();
                formData.append('file', user.profilePicture)
                let url = `${apiBaseUrl}/user/uploads/${id}`
                Request
                    .post(url)
                    .set({ 'Authorization': 'Bearer' + token })
                    .send(formData)
                    .then(resp => {
                        console.log("in else resp", resp)

                        return {
                            type: "UPDATE_USER",
                            payload: resp.body
                        }
                    })
            }
            else{
                return {
                    type: "UPDATE_USER",
                    payload: resp.body
                }
            }
        })

}

//----------get user data through token----------
export function getUserDataByToken() {
    let token = localStorage.getItem('token')
    const url = `${apiBaseUrl}/user`;
    return Request.get(url).set({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })
        .then(response => {
            console.log("data by token send ", response)
            return {
                type: "LOAD_LOGIN",
                payload: response.body

            }
        })
        .catch((err) => {
            throw new SubmissionError({ _error: err })
        })
}

export function Logout() {
    localStorage.clear();
    window.location.href = '/';
    return {
        type: "LOG_OUT"
    }
}