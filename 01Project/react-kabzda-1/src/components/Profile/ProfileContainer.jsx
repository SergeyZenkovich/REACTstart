import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainerAPI extends React.Component {

    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${'2'}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return (
            <Profile {...this.props} />
          )
    }
  }
  
  //postsData = {props.profile.postsData} dispatch = {props.dispatch}  newPostText = {props.newPostText}
  // addPostState = {props.addPostState } updateTextArea = {props.updateTextArea}
  let mapStateToProps = (state)=>{
      return(
        {
            profile: state.profile.profile
        }
      )
  }

  const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI)
  export default ProfileContainer;