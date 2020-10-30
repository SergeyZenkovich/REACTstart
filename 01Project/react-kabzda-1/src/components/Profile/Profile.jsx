import React from 'react';
import s from './Profile.module.css';
import About from './About/About';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/preloader';


const Profile = ({profile, status, updateUserStatus }) => {
  return (
    <>
      {!profile ? <Preloader /> :
        <div className={s.Profile}>
          <About profile={profile} status={status} updateUserStatus={updateUserStatus} />
          <MyPostsContainer />
        </div>}
    </>
  )
}

export default Profile;