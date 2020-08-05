import React from 'react';
import s from './About.module.css';
import UserMainData from './UserMainData/UserMainData';
import UserDescription from './UserDescription/UserDescription';
import UserInfo from './UserInfo/UserInfo';

const About = () => {
  return (
    <div className={s.contentDescription}>
      <UserMainData firstName='Sergey' secondName='Zenkovich' />
      <UserDescription place = 'Minsk' profession = 'Front-end' job = 'EPAM'/>
      <UserInfo contactsCounter = '584' postsCounter = '78'/>
    </div>
  )
}
export default About;