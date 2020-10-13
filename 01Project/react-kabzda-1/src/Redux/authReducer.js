import { authAPI } from "../api/api";

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
                isAuth: true
            };
        }

        default:
            return state;
    }
}

const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });
export { setAuthUserData }

export const getUserIfLogin = () => (dispatch) => {
    authAPI.auth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    });
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                getUserIfLogin()(dispatch);
            }
        }
        )

}

export default authReducer