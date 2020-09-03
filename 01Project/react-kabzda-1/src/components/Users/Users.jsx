import React from 'react';
import User from './User/User';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURl: '', followed: false, fullName: 'Luka', status: 'Nooooo!', country: 'Russia', city: 'Rostov' },
            { id: 2, photoURl: '', followed: true, fullName: 'Romchik', status: 'Skkrrartudu!', country: 'Belarus', city: 'Minsk' },
            { id: 3, photoURl: '', followed: true, fullName: 'Vlados', status: 'EEEEE!', country: 'Belarus', city: 'Minsk' },
            { id: 4, photoURl: '', followed: true, fullName: 'Ponchik', status: 'SPS!', country: 'Belarus', city: 'Volkovysk' }
        ]);
    }


    let usersOnPage = props.users.map(user => <User key={user.id} id={user.id} followed={user.followed} fullName={user.fullName} status={user.status} country={user.country} city={user.city} followUser={props.followUser} unfollowUser={props.unfollowUser} />);
    return (
        <div>
            {usersOnPage}
        </div>
    )
}

export default Users;