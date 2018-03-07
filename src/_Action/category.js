import Request from 'superagent';
//import { SubmissionError } from 'redux-form'
//import config from '../config';

let apiBaseUrl = '/';
if(process.env.NODE_ENV == 'production') {
    apiBaseUrl = 'http://209.250.243.231:4000'
} else {
    apiBaseUrl = 'http://localhost:2002'
}

 
export function getCategories(){  
    const url = `${apiBaseUrl}/api/categories`;
    return  Request.get(url).then((response=>{
        return{
            type : "GET-CATEGORIES",
            payload : response.body.categories || []
        }
    }))
    
}




   



