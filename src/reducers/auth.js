import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_RESET,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_RESET,
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE,
    PROFILE_RESET,
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAILURE,
    SIGNOUT_RESET
} from "../constants/ActionTypes";

export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case SIGNUP_REQUEST:
        case SIGNIN_REQUEST:
            return {loading: true}
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            return {loading: false, success: true, token: action.payload.token, user: action.payload.user}
        case SIGNUP_FAILURE:
        case SIGNIN_FAILURE:
            return {loading: false, error: action.payload}
        case SIGNUP_RESET:
        case SIGNIN_RESET:
            return {}
        default:
            return state;
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch(action.type) {
        case PROFILE_REQUEST:
            return {loading: true}
        case PROFILE_SUCCESS:
            return {loading: false, success: true, user: action.payload, token: action.payload.token}
        case PROFILE_FAILURE:
            return {loading: false, error: action.payload}
        case PROFILE_RESET:
            return {}
        default:
            return state;
    }
}

export const signoutReducer = (state= {}, action) => {
    switch(action.type) {
        case SIGNOUT_REQUEST:
            return {loading: true};
        case SIGNOUT_SUCCESS:
            return {loading: false, success: true};
        case SIGNOUT_FAILURE:
            return {loading: false, error: action.payload}
        case SIGNOUT_RESET:
            return {}
        default:
            return state;
    }
}