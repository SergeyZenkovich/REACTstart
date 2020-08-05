import React from 'react';
import s from  './Header.module.css';

const Header = ()=>{
    return (
        <header className = {s.header}>
        <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' />
      </header>
    )
}

export default Header;