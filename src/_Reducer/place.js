
let initialState = {
    places: [],
    place: {}
}
export default function (state = initialState, action) {
    console.log("palceeeee", action.type)
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
    }

    
    return state;
}