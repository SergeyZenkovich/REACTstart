import React from 'react';
import s from './../About.module.css';


const UserDescription = (props) => {
  return (
    <div className={s.description}>
      <div className={s.userPlace}>
        <p>{props.place}</p>
      </div>
      <div className={s.userJob}>
        <p>{props.profession}</p>
        <p>{props.job}</p>
      </div>
    </div>
  )
}

export default UserDescription;