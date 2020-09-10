import React from 'react';
import s from './../About.module.css';

const UserInfo = (props) => {
  return (
    <div className={s.userInfo}>
      <div className={s.contactsPostsCount}>
        <div>Contacts <span>{props.contactsCounter}</span></div>
        <div>Posts <span>{props.postsCounter}</span></div>
      </div>
      <div className={s.socials}>
        {props.facebook ? <div className={s.facebook} ></div> : null}
        {props.github ? <div className={s.github} ></div> : null}
        {props.instagram ? <div className={s.instagram} ></div> : null}
        {props.twitter ? <div className={s.twitter} ></div> : null}
        {props.youtube ? <div className={s.youtube} ></div> : null}
        {props.vk ? <div className={s.vk} ></div> : null}
        {props.website ? <div className={s.website} ></div> : null}
      </div>
    </div>

  )
}

export default UserInfo;