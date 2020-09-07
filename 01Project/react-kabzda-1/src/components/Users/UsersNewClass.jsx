import React from 'react';
import User from './User/User';
import Axios from 'axios';
import iconPhoto from '../../assets/images/user_icon.png'
import s from './Users.module.css';

class Users extends React.Component {


    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            if (this.props.users.length === 0) {
                this.props.setUsers(response.data.items);
                let totalUsersCount = response.data.totalCount > 100 ? 100 : response.data.totalCount;
                this.props.setTotalCount(totalUsersCount);
            }
            // this.props.setUsers(response.data.items);
        });
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }



    render() {
        let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pagesArray = [];
        for (let i = 1; i <= pages; i++) {
            pagesArray.push(i);
        }
        return (
            <div className={s.usersBlock}>
                <div className={s.pagBlock}>
                    {pagesArray.map(el => <button className={this.props.currentPage === el ? s.pagSelected : s.button} onClick={() => { this.onPageChanged(el) }} value={el}>{el}</button>)}
                </div>
                {this.props.users.map(user => <User key={user.id} id={user.id} followed={user.followed} photo={user.photos.small ? user.photos.small : iconPhoto} fullName={user.name} status={user.status} country={user.country} city={user.city} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />)}
            </div >
        )
    }
}
export default Users;