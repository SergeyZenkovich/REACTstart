import React from 'react';
import s from './../About.module.css';

const UserInfo = (props)=>{
  return(
    <div className={s.userInfo}>
        <div>Contacts <span>{props.contactsCounter}</span></div>
        <div>Posts <span>{props.postsCounter}</span></div>
    </div>
  )
}

export default UserInfo;