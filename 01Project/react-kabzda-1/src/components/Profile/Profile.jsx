import React from 'react';
import s from './Profile.module.css';
import About from './About/About';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/preloader';


const Profile = (props) => {
  return (
    <>
      {!props.profile ? <Preloader /> :
        <div className={s.Profile}>
          <About profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
          <MyPostsContainer store={props.store} />
        </div>}
    </>
  )
}

export default Profile;