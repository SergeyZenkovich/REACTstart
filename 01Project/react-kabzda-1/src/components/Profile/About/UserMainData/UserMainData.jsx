import React from 'react';
import s from './../About.module.css';

const UserMainData = (props) => {
  const mainPhotoSelectedOn = (e)=>{
    if(e.target.files.length){
      const file = e.target.files[0];
      props.savePhoto(file);
    }
      
  }
  return (
    <div className={s.userMainData}>
      
      <img className={s.avatar} alt='' src={props.photo} />
      <label  htmlFor = "_uploadImage" className ={s.loadLabel}>Choose Image</label>
      {props.isOwner ? <input type = "file" id = "_uploadImage" name= "_uploadImage" className ={s.loadButton}  accept=".jpg, .jpeg, .png" onChange={mainPhotoSelectedOn}/> : null}
      
      <div className={s.userName}>
        <span>{props.fullName}</span>
      </div>
    </div>
  )
}

export default UserMainData;