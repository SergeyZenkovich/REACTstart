import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';


const User = (props) => {
    return (
        <div className={s.userBlock}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photo} alt="" />
            </NavLink>

            <div className={s.userInfoBlock}>
                <div className={s.userName}>{props.fullName}</div>
                <div>{props.status}</div>
                {props.followed ? <button className={s.unfollowed} disabled={props.followingProgress.some(id=>id===props.id)} onClick={() => {
                
                    props.toggleIsFollowingProgress(true, props.id);
                    followAPI.unfollowUser(props.id)
                        .then((resultCode) => {
                            if (resultCode === 0) {
                                props.unfollowUser(props.id);
                                
                            }
                            props.toggleIsFollowingProgress(false, props.id);
                        });
                }
                }>Unfollow</button> : <button className={s.followed} disabled={props.followingProgress.some(id=>id===props.id)} onClick={() => {
                    
                    props.toggleIsFollowingProgress(true,props.id);
                    followAPI.followUser(props.id)
                        .then((resultCode) => {
                            if (resultCode === 0) {
                                props.followUser(props.id);
                                
                            }
                            props.toggleIsFollowingProgress(false,props.id);
                        });
                }}>Follow</button>}
            </div>
        </div>
    )
}
export default User;