const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.number
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state;
    }
}

const followActionCreator = (userID) => ({ type: FOLLOW, userID });
const unFollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
const setCurrentPageActionCreator = (number) => ({ type: SET_CURRENT_PAGE, number });
const setTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

export { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator }


export default usersReducer;