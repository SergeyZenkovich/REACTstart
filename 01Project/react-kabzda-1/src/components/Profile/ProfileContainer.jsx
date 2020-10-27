import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, setUserProfile, updateUserStatus } from '../../Redux/profileReducer';
import { withRouter } from "react-router";
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';
import { getIsUserAuth, getProfile, getStatus, getUserId } from '../../Redux/profileSelectors';

class ProfileContainerAPI extends React.PureComponent {

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}



let mapStateToProps = (state) => {
    return (
        {
            profile: getProfile(state),
            status: getStatus(state),
            userId: getUserId(state),
            isAuth: getIsUserAuth(state)
        }
    )
}


export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI);