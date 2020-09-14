import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profileReducer';
import { withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }
    com
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }


    render() {
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
        }
    )
}


const ProfileContainer = connect(mapStateToProps, { setUserProfile })(WithURLDataComponent);
export default ProfileContainer;