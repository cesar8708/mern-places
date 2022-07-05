import React from "react";
import UserList from "../components/UserList";
const images = [
  "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg",
  "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-dead-sea-israel-city.jpg",
  "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-singapore.jpg",
];

const Users = () => {
  const USERS = [
    { id: 'u1', name: "Cesar Meza", image: images[0], places: 1 },
    { id: 'u2', name: "Leidy Quiroz", image: images[1], places: 2 },
    { id: 'u3', name: "Nicolás Meza", image: images[2], places: 3 },
  ];
//   const USERS2 = [];
  return <UserList items={USERS} />;
};

export default Users;
