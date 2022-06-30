import React from "react";
import UserList from "../components/UserList";
const Users = () => {
    const USERS=[
        {id:Math.random, name:'Cesar Meza', image:'%PUBLIC_URL%/People1.png', places:1},
        {id:Math.random, name:'Leidy Quiroz', image:'%PUBLIC_URL%/People2.png', places:2},
        {id:Math.random, name:'Nicolás Meza', image:'%PUBLIC_URL%/People3.png', places:3}
    ];
    const USERS2=[];
    return <UserList items={USERS}/>
}

export default Users;