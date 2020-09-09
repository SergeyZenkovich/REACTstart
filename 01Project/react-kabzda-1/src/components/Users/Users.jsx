import React from 'react';
import User from './User/User';
import iconPhoto from '../../assets/images/user_icon.png'
import s from './Users.module.css';
import pagination from '../../pagination';

const UsersFunc = (props) => {    
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = pagination(props.currentPage, pages);
    
    return (
        <div className={s.usersBlock}>
            <div className={s.pagBlock}>
                {pagesArray.map((el, index) => {
                    if (el !== '...') {
                        return <button className={props.currentPage === el ? s.pagSelected : s.button} onClick={() => { props.onPageChanged(el) }} value={el} key={index}>{el}</button>
                    }
                    return <button className={s.button} value={el} key={index}>{el}</button>
                })
                }
            </div>
            {props.users.map(user => <User key={user.id} id={user.id} followed={user.followed} photo={user.photos.small ? user.photos.small : iconPhoto} fullName={user.name} status={user.status} country={user.country} city={user.city} followUser={props.followUser} unfollowUser={props.unfollowUser} />)}
        </div >
    )
}

export default UsersFunc;