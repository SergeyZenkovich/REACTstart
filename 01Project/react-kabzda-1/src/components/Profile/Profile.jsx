import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import About from './About/About';


const Profile = (props) => {
  return (
    <div className = {s.Profile}>
      <About />
      <MyPosts postsData = {props.profile.postsData} dispatch = {props.dispatch}  newPostText = {props.newPostText}/>
    </div>
  )
}
// addPostState = {props.addPostState } updateTextArea = {props.updateTextArea}
export default Profile;