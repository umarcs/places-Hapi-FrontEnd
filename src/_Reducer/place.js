
let initialState = {
    place : []
 }
 export default function(state = initialState, action){
     console.log("palceeeee", action.payload)
     switch(action.type){
         case  "GET-PLACES" :
             return {
                 ...state,
                 place: action.payload
             };
             break;
         
     }
 
     return state;
 }