import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {

                ...state,
                ...action.data,
                isAuth: action.isAuth
            };
        }

        default:
            return state;
    }
}

const setAuthUserData = (data, isAuth) => ({ type: SET_USER_DATA, data, isAuth });
export { setAuthUserData }

export const getUserIfLogin = () => (dispatch) => {
    authAPI.auth()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data, true));
            }
        });
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getUserIfLogin());
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : 'SIMP'
                dispatch(stopSubmit('loginForm', { _error: message }));
            }
        }
        )
}
export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, false));
            }
        }
        )
}

export default authReducer