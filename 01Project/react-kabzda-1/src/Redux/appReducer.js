import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getUserIfLogin } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized:  false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {

                ...state,
                initialized:true,
            };
        }

        default:
            return state;
    }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export { initializedSuccess }

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserIfLogin());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    })
    
}


export default appReducer;