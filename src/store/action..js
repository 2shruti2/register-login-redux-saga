import { GET_USER, USER_LOGIN } from "./constant"

export const getUser = (payload) =>{
    return{
        type: GET_USER,
        payload
    }
}

export const userLogin = (payload) =>{
    return{
        type: USER_LOGIN,
        payload
    }
}

