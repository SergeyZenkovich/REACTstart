const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    newPostText: 'it-kamasutra.com',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let index = state.postsData[state.postsData.length - 1].id;
            let newPost = {
                id: index + 1,
                message: state.newPostText,
                likesCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }

        case UPDATE_TEXT_AREA: {
            return {
                ...state,
                newPostText: action.text
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
}

const addPostActionCreator = () => ({ type: ADD_POST });
const updateNewPostTextcreator = (t) => ({ type: UPDATE_TEXT_AREA, text: t });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export { addPostActionCreator, updateNewPostTextcreator, setUserProfile }


export default profileReducer;