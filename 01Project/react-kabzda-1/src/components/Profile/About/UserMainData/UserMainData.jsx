import React from 'react';
import s from './../About.module.css';

const UserMainData = (props) => {
  return (
    <div className={s.userMainData}>
      <img className={s.avatar} alt='' src={props.photo} />
      <div className={s.userName}>
        <span>{props.fullName}</span>
      </div>
    </div>
  )
}

export default UserMainData;