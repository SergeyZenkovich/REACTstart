import React from 'react';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from '../../Redux/usersReducer';
import { connect } from 'react-redux';
import Axios from 'axios';
import UsersFunc from './Users';



class Users extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            if (this.props.users.length === 0) {
                this.props.setUsers(response.data.items);
                let totalUsersCount = response.data.totalCount > 100 ? 100 : response.data.totalCount;
                this.props.setTotalCount(totalUsersCount);
            }
        });
    }
    
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <UsersFunc totalUsersCount = {this.props.totalUsersCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage} users = {this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} onPageChanged = {this.onPageChanged}/>
    }
}

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