let initialState = {
   categories : []
}

export default function(state = initialState, action){
    switch(action.type){
        case  "GET_CATEGORIES" :
            return {
                ...state,
                categories: action.payload
            };
            break;
        
    }

    return state;
}