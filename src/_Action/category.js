import Request from 'superagent';
//import { SubmissionError } from 'redux-form'
//import config from '../config';
let apiBaseUrl = 'http://localhost:2002/api';

//let apiBaseUrl = 'http://209.250.243.231:2002/api';
// console.log('process.env: ', process.env)
// if(process.env.NODE_ENV == 'production') {
//     apiBaseUrl = 'http://209.250.243.231:4000'
// } else {
//     apiBaseUrl = 'http://localhost:2002'
// }

 
export function getCategories(){  
    const url = `${apiBaseUrl}/categories`;
    return  Request.get(url).then((response=>{
        return{
            type : "GET_CATEGORIES",
            payload : response.body.categories || []
        }
    }))
    
}




   



