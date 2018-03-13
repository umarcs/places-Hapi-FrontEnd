import Request from 'superagent';
import { SubmissionError } from 'redux-form'
let apiBaseUrl = 'http://localhost:2002/api';

//let apiBaseUrl = 'http://209.250.243.231:2002/api';
// console.log('process.env: ', process.env)
// if(process.env.NODE_ENV == 'production') {
//     apiBaseUrl = 'http://209.250.243.231:4000'
// } else {
//     apiBaseUrl = 'http://localhost:2002'
// }

 
export function signup(data){  
    const url = `${apiBaseUrl}/user/signup`;
    return  Request.post(url).send(data).then((Response=>{
        return{
            type : "SIGN_UP",
            payload : Response.body
        }
    }))
    .catch((err)=>{
        throw new SubmissionError({_error: 'Email Already Exist!' })
    })
    
}

export function login(data){  
    const url = `${apiBaseUrl}/user/login`;
    return  Request.post(url).send(data).then((Response=>{
        localStorage.setItem("token",Response.body.token);

        return{
            type : "LOG_IN",
            payload : Response.body
        }
    }))
    .catch((err)=>{
        console.log("errr", err)
        throw new SubmissionError({_error: 'Email Or Password Incorrect!' })
    })
}

export function update(data){    
    let token= localStorage.getItem("token")
    const id= data._id
   const  updatedData= {
        firstName: data.firstName,
        lastName: data.lastName,
    }
    console.log("data ,", data)
    const url = `${apiBaseUrl}/user/${id}`
    return Request.put(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token })
    .send(updatedData).then((Response=>{
        //localStorage.setItem('login', JSON.stringify(Response.body));
      console.log("data is here:", Response.body)
       //return Response;
       return {
           type :"UPDATE_USER",
           payload: Response.body
       }
       
   }))
   
}

// export function update(id){  
//     const url = `${apiBaseUrl}/user${id}`;
//     return  Request.put(url).then((Response=>{
//         console.log("Update", Response)
//         return{
//             type : "UPDATE-USER",
//             payload : Response.body
//         }
//     }))
    
// }

//----------get user data through token----------
export function getUserDataByToken(){ 
    let token = localStorage.getItem('token')
    const url = `${apiBaseUrl}/user`;
     return  Request.get(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
     .then(response=>{
        console.log("data by token send ",response)
        return{
            type : "LOAD_LOGIN",
            payload: response.body
            
        }
    })
    .catch((err)=>{
        throw new SubmissionError({_error: err })
    })
}


export function Logout(){
    localStorage.clear();
    window.location.href = '/';
    return{
        type: "LOG_OUT"
    }
}


   



