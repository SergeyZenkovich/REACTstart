import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>settings</NavLink></div>
      </div>
        <Friends friends = {props.state.friends}/>
    </nav>
  )
}
export default Nav;