import React from "react";
import UserList from "../components/UserList";
const Users = () => {
    const USERS=[
        {id:Math.random, name:'Cesar Meza', image:'../../../public/People1.png', places:1},
        {id:Math.random, name:'Leidy Quiroz', image:'../../../public/People2.png', places:2},
        {id:Math.random, name:'Nicolás Meza', image:'../../../public/People3.png', places:3},
    ];
    return <UserList items={USERS}/>
}

export default Users;