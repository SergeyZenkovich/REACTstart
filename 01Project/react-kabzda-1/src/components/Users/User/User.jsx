import React from 'react';
import s from './User.module.css';

const User = (props) => {
    return (
        <div className={s.userBlock}>
            <img src={props.photo} alt="" />
            <div className={s.userInfoBlock}>
                <div className={s.userName}>{props.fullName}</div>
                <div>{props.status}</div>
                {props.followed ? <button className = {s.unfollowed} onClick={() => { props.unfollowUser(props.id) }}>Unfollowed</button> : <button className = {s.followed} onClick={() => { props.followUser(props.id) }}>Followed</button>}
            </div>
        </div>
    )
}
export default User;