import React from 'react';
import { followUser, unfollowUser, setUsers, setCurrentPage, setTotalCount, toggleIsFetching } from '../../Redux/usersReducer';
import { connect } from 'react-redux';
import UsersFunc from './Users';
import Preloader from '../../components/common/preloader/preloader'
import { usersAPI } from '../../api/api';


class Users extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            // if (this.props.users.length === 0) {
            this.props.setUsers(data.items);
            let totalUsersCount = data.totalCount > 100 ? 100 : data.totalCount;
            this.props.setTotalCount(totalUsersCount);
            this.props.toggleIsFetching(false);
            // }
        });
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        usersAPI.getUsers(p, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            {console.log(this.props.isFetching)}
            <UsersFunc totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} onPageChanged={this.onPageChanged} />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, { followUser, unfollowUser, setUsers, setCurrentPage, setTotalCount, toggleIsFetching })(Users);

export default UsersContainer;


//old 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userID) => {
//             dispatch(followActionCreator(userID));
//         },
//         unfollowUser: (userID) => {
//             dispatch(unFollowActionCreator(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (number) => {
//             dispatch(setCurrentPageActionCreator(number));
//         },
//         setTotalCount: (number) => {
//             dispatch(setTotalCountActionCreator(number));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         }
//     }
// }