import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../Redux/profileReducer';
import { withRouter } from "react-router";
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainerAPI extends React.Component {

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

//postsData = {props.profile.postsData} dispatch = {props.dispatch}  newPostText = {props.newPostText}
// addPostState = {props.addPostState } updateTextArea = {props.updateTextArea}


let mapStateToProps = (state) => {
    return (
        {
            profile: state.profile.profile,
        }
    )
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI);