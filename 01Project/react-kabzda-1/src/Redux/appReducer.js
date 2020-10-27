import { getUserIfLogin } from "./authReducer";

const INITIALIZED_SUCCESS = 'samuraiNetwork/appReducer/INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {

                ...state,
                initialized: true,
            };
        }

        default:
            return state;
    }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export { initializedSuccess }

export const initializeApp = () => async (dispatch) => {
    const promise = await dispatch(getUserIfLogin());
    await Promise.all([promise])
    dispatch(initializedSuccess());
}


export default appReducer;