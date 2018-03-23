
let initialState = {
    places: [],
    place: null,
    loading: false,
}
export default function (state = initialState, action) {
    console.log("action", action)
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
                loading: true,
                place: null
            };
            break;
        case "GET_PLACE_SUCCESS":
            return {
                ...state,
                loading: false,
                place: action.payload
            };
            break;
        case "GET_PLACE_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
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