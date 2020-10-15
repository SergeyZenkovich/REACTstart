import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, setUserProfile, updateUserStatus } from '../../Redux/profileReducer';
import { withRouter } from "react-router";
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainerAPI extends React.Component {

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        console.log('asdas');
        return (
            <Profile {...this.props} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}


let mapStateToProps = (state) => {
    return (
        {
            profile: state.profile.profile,
            status: state.profile.status,
            userId: state.auth.id,
            isAuth: state.auth.isAuth
        }
    )
}


export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI);