import Request from 'superagent';
import { SubmissionError } from 'redux-form'

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

 
export function signup(data){  
    const url = "http://localhost:2002/api/user/signup";
    return  Request.post(url).send(data).then((Response=>{
        return{
            type : "SIGN-UP",
            payload : Response.body
        }
    }))
    .catch((err)=>{
        console.log("errr", err)
        throw new SubmissionError({_error: 'Email Already Exist!' })
    })
    
}

export function login(data){  
    const url = "http://localhost:2002/api/user/login";
    return  Request.post(url).send(data).then((Response=>{
        localStorage.setItem("token",Response.body.token);
        return{
            type : "LOG-IN",
            payload : Response.body
        }
    }))
    .catch((err)=>{
        console.log("errr", err)
        throw new SubmissionError({_error: 'Email Or Password Incorrect!' })
    })
}

// export function update(id){  
//     const url = `http://localhost:2002/api/user${id}`;
//     return  Request.put(url).then((Response=>{
//         console.log("Update", Response)
//         return{
//             type : "UPDATE-USER",
//             payload : Response.body
//         }
//     }))
    
// }



   



