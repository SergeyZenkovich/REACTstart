import React from 'react';
import s from './../About.module.css';

const UserMainData = (props) => {
  return (
    <div className={s.userMainData}>
      <img className={s.avatar} alt='' src='https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png' />
      <div className={s.userName}>
        <span>{props.firstName}</span> <span>{props.secondName}</span>
      </div>
    </div>
  )
}

export default UserMainData;