
let initialState = {
    signup: [],
    login: [],
    update: []
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