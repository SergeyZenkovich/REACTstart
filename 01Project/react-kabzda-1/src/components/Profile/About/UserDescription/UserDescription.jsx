import React from 'react';
import s from './../About.module.css';


const UserDescription = (props) => {
  return (
    <div className={s.description}>
      <div className={s.userPlace}>
        <p>{props.place}</p>
      </div>
      <div className={s.userJob}>
        <p>Looking for a job: <span>{props.lookingForAJob ? 'Yes' : 'No'}</span> </p>
        <p>{props.lookingForAJobDescription}</p>
      </div>
    </div>
  )
}

export default UserDescription;