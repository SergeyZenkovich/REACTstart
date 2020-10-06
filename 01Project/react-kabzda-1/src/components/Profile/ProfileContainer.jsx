import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../Redux/profileReducer';
import { Redirect, withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth){
            return (
                <Redirect to = "/login"/>
            )
        }
        return (
            <Profile {...this.props} />
        )
    }
}

//postsData = {props.profile.postsData} dispatch = {props.dispatch}  newPostText = {props.newPostText}
// addPostState = {props.addPostState } updateTextArea = {props.updateTextArea}

let WithURLDataComponent = withRouter(ProfileContainerAPI);


let mapStateToProps = (state) => {
    return (
        {
            profile: state.profile.profile,
            isAuth: state.auth.isAuth,
        }
    )
}



const ProfileContainer = connect(mapStateToProps, { setUserProfile, getUserProfile })(WithURLDataComponent);
export default ProfileContainer;