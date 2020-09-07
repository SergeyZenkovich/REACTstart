import React from 'react';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from '../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './UsersNewClass';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollowUser: (userID) => {
            dispatch(unFollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (number) => {
            dispatch(setCurrentPageActionCreator(number));
        },
        setTotalCount: (number) => {
            dispatch(setTotalCountActionCreator(number));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;