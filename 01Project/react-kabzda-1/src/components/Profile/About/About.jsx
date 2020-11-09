import React, { useState } from 'react';
import s from './About.module.css';
import UserMainData from './UserMainData/UserMainData';
import UserDescription from './UserDescription/UserDescription';
import UserInfo from './UserInfo/UserInfo';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import DescriptionForm from './DescriptionForm';


const About = (props) => {

  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
  }
  const onSubmit = (formData) => {
    props.saveProfile(formData);
    deactivateEditMode();
  }

  return (
    <div className={s.contentDescription}>
      <div className={s.statusAndPhotoBlock}>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner} />
        <UserMainData fullName={props.profile.fullName} photo={props.profile.photos.large ? props.profile.photos.large : 'https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png'} isOwner={props.isOwner} savePhoto={props.savePhoto} />
      </div>
      {editMode ?
        <div>
          <DescriptionForm onSubmit={onSubmit} />
        </div> :
        <div className={s.descriptionBlock}>
          <UserDescription lookingForAJob={props.profile.lookingForAJob} lookingForAJobDescription={props.profile.lookingForAJobDescription} aboutMe={props.profile.aboutMe} />
          <UserInfo contacts={props.profile.contacts} />
          {props.isOwner && <button className={s.editStartButton} onClick={activateEditMode}>Edit</button>}
        </div>

      }

    </div>
  )
}
export default About;