import React from 'react';
import s from './../About.module.css';

const UserInfo = (props) => {
  console.log(props.github)
  return (
    <div className={s.userInfo}>
      <div className={s.contactsPostsCount}>
        <div>Contacts <span>{props.contactsCounter}</span></div>
        <div>Posts <span>{props.postsCounter}</span></div>
      </div>
      <div className={s.socials}>
        {props.facebook ? <a href={`http://${props.facebook}`} target = '_blank'><div className={s.facebook} ></div></a> : null}
        {props.github ? <a href={`http://${props.github}`} target = '_blank'><div className={s.github} ></div></a> : null}
        {props.instagram ? <a href={`http://${props.instagram}`} target = '_blank'><div className={s.instagram} ></div></a> : null}
        {props.twitter ? <a href={props.twitter} target = '_blank'><div className={s.twitter} ></div></a> : null}
        {props.youtube ? <a href={`http://${props.youtube}`} target = '_blank'><div className={s.youtube} ></div></a> : null}
        {props.vk ? <a href={`http://${props.vk}`} target = '_blank'><div className={s.vk} ></div></a> : null}
        {props.website ? <a href={`http://${props.website}`} target = '_blank'><div className={s.website} ></div></a> : null}
      </div>
    </div>

  )
}

export default UserInfo;