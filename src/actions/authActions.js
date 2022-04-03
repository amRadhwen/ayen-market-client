import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_RESET,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_RESET,
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAILURE,
    SIGNOUT_RESET,
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE,
    PROFILE_RESET
} from "../constants/ActionTypes";
import axios from "axios";

export const signup = (_data) => async (dispatch) => {
    try {
        dispatch({
            type: SIGNUP_REQUEST
        })
        const {
            firstName,
            lastName,
            email,
            tel,
            password,
            rpassword,
            birthDate,
            prov,
            zip,
            addr
        } = _data;
        const { data } = await axios.post("/api/user", {
            firstName,
            lastName,
            email,
            tel,
            password,
            rpassword,
            birthDate,
            prov,
            zip,
            addr
        })
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data
        })
        localStorage.setItem("auth", JSON.stringify(data));
    }
    catch (error) {
        console.log(error);
        console.log(Object.keys(error));
        console.log(Object.values(error));
        dispatch({
            type: SIGNUP_FAILURE,
            payload: error.response.data.error
        })
    }
}

export const signin = (_data) => async (dispatch) => {
    try {
        dispatch({
            type: SIGNIN_REQUEST
        });


        const { login, password } = _data;
        const { data } = await axios.post("/api/user/auth", { login: login, password: password });
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: data
        });
        /*
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: user
        })
        */
        localStorage.setItem("auth", JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: SIGNIN_FAILURE,
            payload: error.response.data.error
        })
    }
}

export const userSignout = () => async (dispatch) => {
    console.log("inside action");
    try {
        dispatch({
            type: SIGNOUT_REQUEST
        })
        localStorage.removeItem("auth");
        dispatch({
            type: SIGNOUT_SUCCESS
        })
    }
    catch (error) {
        dispatch({
            type: SIGNOUT_FAILURE,
            payload: error
        })
    }
}


export const getUserProfile = (token) => async (dispatch) => {
    try {
        dispatch({
            type: PROFILE_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/user/", config);
        const { user } = data;
        dispatch({
            type: PROFILE_SUCCESS,
            payload: user
        })
        const authFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
        localStorage.setItem("auth", JSON.stringify({ ...authFromLocalStorage, user: user }));
    }
    catch (error) {
        dispatch({
            type: PROFILE_FAILURE,
            payload: error.response.data.error
        })
    }
}