
let initialState = {
    signup : [],
    login : [],
    update : []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case "SIGN-UP":
            return {
                ...state,
                signup: action.payload
            };
            break;
            
        case "LOG-IN":
            return {
                ...state,
                login: action.payload
            };
            break;

        case "UPDATE-USER":
            return {
                ...state,
                update: action.payload
            };

            break;
    }

    return state;
}