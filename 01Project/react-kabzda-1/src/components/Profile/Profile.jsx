import React from 'react';
import s from './Profile.module.css';
import About from './About/About';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/preloader';


const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  return (
    <>
      {!profile ? <Preloader /> :
        <div className={s.Profile}>
          <About profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner = {isOwner} savePhoto = {savePhoto}/>
          <MyPostsContainer />
        </div>}
    </>
  )
}

export default Profile;