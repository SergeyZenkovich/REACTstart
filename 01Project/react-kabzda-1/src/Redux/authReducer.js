import { usersAPI } from "../api/api";

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

export const logIn = () => (dispatch) => {
    usersAPI.auth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    });
}

export default authReducer