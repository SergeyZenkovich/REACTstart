import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

  return (
    <header className={s.header}>
      <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' />
      <div className={s.loginBlock}>
        {props.isAuth ? <p>{props.login}</p> : <NavLink to='/login'>Login </NavLink>}
      </div>
    </header>
  )
}

export default Header;