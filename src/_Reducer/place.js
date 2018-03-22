
let initialState = {
    places: [],
    place: null
}
export default function (state = initialState, action) {
    console.log("action.payload", action.type, action.payload)
    switch (action.type) {
        case "GET_PLACES":
            return {
                ...state,
                places: action.payload
            };
            break;

        case "ADD_PLACE":
            return {
                ...state
            };
            break;
        case "GET_PLACES_OF_ONE_USER":
            return {
                ...state,
                places: action.payload
            };
            break;
        case "GET_PLACE":
            return {
                ...state,
                place: action.payload
            };
            break;
        case "UPDATE_PLACE":
            return {
                ...state,
                place: action.payload
            };
            break;
    }

    
    return state;
}