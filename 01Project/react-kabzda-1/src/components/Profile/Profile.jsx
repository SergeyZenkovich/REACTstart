import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import About from './About/About';


const Profile = (props) => {
  return (
    <div className = {s.Profile}>
      <About />
      <MyPosts postsData = {props.profile.postsData} addPostState = {props.addPostState } updateTextArea = {props.updateTextArea} newPostText = {props.newPostText}/>
    </div>
  )
}
export default Profile;