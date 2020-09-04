import React from 'react';
import User from './User/User';
import Axios from 'axios';
import iconPhoto from '../../assets/images/user_icon.png'
import s from './Users.module.css';

class Users extends React.Component {
    constructor(props){
        super(props);
        if (this.props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => { 
                console.log(response);
                this.props.setUsers(response.data.items); 
            });
        }
    }
    render() {
        return (
            <div className={s.usersBlock}>
                {this.props.users.map(user => <User key={user.id} id={user.id} followed={user.followed} photo={user.small ? user.small : iconPhoto} fullName={user.name} status={user.status} country={user.country} city={user.city} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />)}
            </div>
        )
    }
}
export default Users;