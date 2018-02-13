
// let initialState = {
//     signupUser : [],
//     loginUser : [],
//     updateUser : []
// }
// export default function (state = initialState, action) {
//     console.log("user", action.payload)
//     switch (action.type) {
//         case "SIGN-UP":
//             return {
//                 ...state,
//                 signupUser: action.payload
//             };
//             break;
            
//         case "LOG-IN":
//             return {
//                 ...state,
//                 loginUser: action.payload
//             };
//             break;

//         case "UPDATE-USER":
//             return {
//                 ...state,
//                 updateUser: action.payload
//             };

//             break;
//     }

//     return state;
// }