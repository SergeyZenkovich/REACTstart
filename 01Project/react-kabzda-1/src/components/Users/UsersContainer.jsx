import React from 'react';
import { followUser, unfollowUser, setCurrentPage, requestUsers, following, unfollowing } from '../../Redux/usersReducer'; import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../components/common/preloader/preloader';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSelector } from '../../Redux/usersSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.requestUsers(p, this.props.pageSize);
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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress,
//     }
// }
const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, { followUser, unfollowUser, setCurrentPage, requestUsers, unfollowing, following }),
    withAuthRedirect
)(UsersContainer);
