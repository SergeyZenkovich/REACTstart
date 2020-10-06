import React from 'react';
import { followUser, unfollowUser, setCurrentPage, getUsers, following, unfollowing } from '../../Redux/usersReducer'; import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../components/common/preloader/preloader';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} users={this.props.users}
                followUser={this.props.followUser} unfollowUser={this.props.unfollowUser}
                onPageChanged={this.onPageChanged}
                followingProgress={this.props.followingProgress}
                unfollowing={this.props.unfollowing}
                following={this.props.following} />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);



export default connect(mapStateToProps, { followUser, unfollowUser, setCurrentPage, getUsers, unfollowing, following })(AuthRedirectComponent)


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