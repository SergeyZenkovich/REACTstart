import React from 'react';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './UsersNewClass';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;