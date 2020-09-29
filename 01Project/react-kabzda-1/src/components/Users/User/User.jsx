import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {
    return (
        <div className={s.userBlock}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photo} alt="" />
            </NavLink>
            
            <div className={s.userInfoBlock}>
                <div className={s.userName}>{props.fullName}</div>
                <div>{props.status}</div>
                {props.followed ? <button className={s.unfollowed} onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                    {
                        headers:{
                            "API-KEY":"3796a674-8052-4373-ae01-8c81619058d1"
                        }, 
                        withCredentials:true
                    }
                    ).then((response)=>{
                        if(response.data.resultCode === 0){
                            props.unfollowUser(props.id);
                        }
                    });
                      }
                     }>Unfollow</button> : <button className={s.followed} onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},
                        {
                            headers:{
                                "API-KEY":"3796a674-8052-4373-ae01-8c81619058d1"
                            },    
                            withCredentials:true
                        }
                        ).then((response)=>{
                            if(response.data.resultCode === 0){
                                props.followUser(props.id);
                            }
                        });
                          }}>Follow</button>}
            </div>
        </div>
    )
}
export default User;