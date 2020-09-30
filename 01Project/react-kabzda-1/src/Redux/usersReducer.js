const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return{
                ...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId] :
                 state.followingProgress.filter(id=> id!=action.userId) 
            }
        }
        default:
            return state;
    }
}

const followUser = (userID) => ({ type: FOLLOW, userID });
const unfollowUser = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (number) => ({ type: SET_CURRENT_PAGE, number });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleIsFollowingProgress = (isFetching, userId)=>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export { followUser, unfollowUser, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleIsFollowingProgress }


export default usersReducer;