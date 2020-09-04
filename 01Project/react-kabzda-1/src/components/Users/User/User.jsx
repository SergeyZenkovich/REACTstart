import React from 'react';
import s from './User.module.css';

const User = (props) => {
    return (
        <div className={s.userBlock}>
            <img src={props.photo} alt=""/>
            <div>{props.fullName}</div>
            <div>{props.status}</div>
            {props.followed ? <button onClick={() => { props.unfollowUser(props.id) }}>Unfollowed</button> : <button onClick={() => { props.followUser(props.id) }}>Followed</button>}

        </div>
    )
}
export default User;