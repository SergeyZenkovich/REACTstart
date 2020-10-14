import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCounter: 15
        },
        {
            id: 2,
            message: "It's my first post",
            likesCounter: 20
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let index = state.postsData[state.postsData.length - 1].id;
            let newPost = {
                id: index + 1,
                message: action.newPost,
                likesCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

const addPost = (newPost) => ({ type: ADD_POST, newPost });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

export { addPost, setUserProfile }

export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getUserProfile(id)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        })
}
export const getUserStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id).then((response) => {
        dispatch(setStatus(response.data))
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((resultCode) => {
        if (resultCode === 0) {
            dispatch(setStatus(status));
        }

    })
}

export default profileReducer;