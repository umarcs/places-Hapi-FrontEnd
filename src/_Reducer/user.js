
let initialState = {
    signup: [],
    login: null,
    update: [],
    loggedInUser: null,
    loading: false,
    error: null,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                signup: action.payload
            };
            break;

        case "LOG_IN":
            return {
                ...state,
                login: action.payload
            };
            break;

        case "UPDATE_USER":
            return {
                ...state,
                login: action.payload
            };

            break;
        case 'LOAD_LOGIN':
            return {
                ...state,
                login: action.payload
            };
            break;

            case 'LOG_OUT':
            return {
                ...state,
                login: null
            };
            break;
    }

    return state;
}