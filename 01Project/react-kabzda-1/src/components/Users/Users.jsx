import React from 'react';
import User from './User/User';
import Axios from 'axios';


const Users = (props) => {
    if (props.users.length === 0) {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{props.setUsers(response.data.items);});
        
    }


    let usersOnPage = props.users.map(user => <User key={user.id} id={user.id} followed={user.followed} fullName={user.name} status={user.status} country={user.country} city={user.city} followUser={props.followUser} unfollowUser={props.unfollowUser} />);
    return (
        <div>
            {usersOnPage}
        </div>
    )
}

export default Users;
 //Users default 
//  [
//     { id: 1, photoURl: '', followed: false, fullName: 'Luka', status: 'Nooooo!', country: 'Russia', city: 'Rostov' },
//     { id: 2, photoURl: '', followed: true, fullName: 'Romchik', status: 'Skkrrartudu!', country: 'Belarus', city: 'Minsk' },
//     { id: 3, photoURl: '', followed: true, fullName: 'Vlados', status: 'EEEEE!', country: 'Belarus', city: 'Minsk' },
//     { id: 4, photoURl: '', followed: true, fullName: 'Ponchik', status: 'SPS!', country: 'Belarus', city: 'Volkovysk' }
// ]