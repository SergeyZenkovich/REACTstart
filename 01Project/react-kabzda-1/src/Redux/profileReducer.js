import { profileAPI } from "../api/api";

const ADD_POST = 'samuraiNetwork/profileReducer/ADD-POST';
const SET_USER_PROFILE = 'samuraiNetwork/profileReducer/SET-USER-PROFILE';
const SET_STATUS = 'samuraiNetwork/profileReducer/SET-STATUS';
const DELETE_POST = 'samuraiNetwork/profileReducer/DELETE-POST';

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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }

        default:
            return state;
    }
}

const addPost = (newPost) => ({ type: ADD_POST, newPost });
const deletePost = (postId) => ({ type: DELETE_POST, postId });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

export {
    addPost, setUserProfile, deletePost
}

export const getUserProfile = (id) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(id)
    dispatch(setUserProfile(response.data));

}
export const getUserStatus = (id) => async (dispatch) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
    const resultCode = await profileAPI.updateStatus(status)
    if (resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;