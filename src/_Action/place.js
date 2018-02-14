import Request from 'superagent';
var _ = require('lodash');

// //import { SubmissionError } from 'redux-form'
// //import config from '../config';

// // let apiBaseUrl = '/';
// // if(process.env.NODE_ENV == 'production') {
// //     apiBaseUrl = 'http://209.250.243.231:4000'
// // } else {
// //     apiBaseUrl = 'http://localhost:2000'
// //}

 
export function places(id){  
    console.log("id", id)
    const arr = [];

    const url = "http://localhost:4000/api/places";
    return  Request.get(url).then((response=>{
        console.log("plpaces",response.body.places[0].category._id)
        response.body.places.map((data  ,idd)=>{
           const _id = data.category_id;
                //console.log("date is here", data)
              const dataqq =   _.filter(data, _.matches({ _id : id  }));
              console.log("id iz", dataqq ,idd  )
              console.log("00444>>>>", dataqq.length)
              if(dataqq.length>0){
                arr.push(idd)
              }
              else{
               // arr.push(idd)
              }

       // console.log("now", dataqq)
        })
        console.log("arr",arr)

        return{
            type : "GET-PLACES",
            payload : response.body
        }
    }))
    
}



   



