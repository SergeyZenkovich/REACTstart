import React from 'react';
import s from './About.module.css';
import UserMainData from './UserMainData/UserMainData';
import UserDescription from './UserDescription/UserDescription';
import UserInfo from './UserInfo/UserInfo';
import ProfileStatus from './ProfileStatus';


const About = (props) => {

  return (
    <div className={s.contentDescription}>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
      <UserMainData fullName={props.profile.fullName} photo={props.profile.photos.large ? props.profile.photos.large : 'https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png'} />
      <UserDescription place='Minsk' lookingForAJob={props.profile.lookingForAJob} lookingForAJobDescription={props.profile.lookingForAJobDescription} />
      <UserInfo
        contactsCounter='584' postsCounter='78'
        facebook={props.profile.contacts.facebook} github={props.profile.contacts.github}
        instagram={props.profile.contacts.instagram} twitter={props.profile.contacts.twitter}
        youtube={props.profile.contacts.youtube} vk={props.profile.contacts.vk}
        website={props.profile.contacts.website} />
    </div>
  )
}
export default About;