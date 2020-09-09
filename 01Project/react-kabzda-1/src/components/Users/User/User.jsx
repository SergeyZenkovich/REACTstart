import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <div className={s.userBlock}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photo} alt="" />
            </NavLink>

            <div className={s.userInfoBlock}>
                <div className={s.userName}>{props.fullName}</div>
                <div>{props.status}</div>
                {props.followed ? <button className={s.unfollowed} onClick={() => { props.unfollowUser(props.id) }}>Unfollowed</button> : <button className={s.followed} onClick={() => { props.followUser(props.id) }}>Followed</button>}
            </div>
        </div>
    )
}
export default User;