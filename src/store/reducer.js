import { GET_LOGIN_DETAILS, GET_USER, LOGIN_SUCCESSFUL, SET_USER} from "./constant"

const initialState = {
    user: {},
    isLoggedin: false,
}

export const userData = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER:
            return {...state,
                user: action.payload
            }

        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

         case GET_LOGIN_DETAILS:
            console.log("action ", action.payload)
            return  {
                ...state,
                user: action.payload
            }

        case LOGIN_SUCCESSFUL:
            return  {
                ...state,
                user: action.payload.data,
                isLoggedin: action.payload.isLoggedin,
            }

        default: return state
    }
}