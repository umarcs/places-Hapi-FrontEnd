// import Request from 'superagent';
// //import { SubmissionError } from 'redux-form'
// //import config from '../config';

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

 
// export function signup(data){  
//     const url = "http://localhost:2002/api/user";
//     return  Request.post(url).send(data).then((Response=>{
//         console.log("User Response", Response)
//         return{
//             type : "SIGN-UP",
//             payload : Response.body
//         }
//     }))
    
// }

// export function login(data){  
//     const url = "http://localhost:2002/api/user";
//     return  Request.post(url).send(data).then((Response=>{
//         console.log("User", Response)
//         return{
//             type : "LOG-IN",
//             payload : Response.body
//         }
//     }))
    
// }

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



   



