import React from "react";
import {useParams} from 'react-router-dom'
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES=[
{
    id:'p1',
    title:'Taj Mahal',
    description: 'A amaizing monument for remeber a big lov3',
    imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
    address:'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
    location:{
        lat: 27.1751496,
        lng:78.0399535
    },
    creator:'u1'
},
{
    id:'p2',
    title:'Empire State',
    description: 'The symbol of Manhathan',
    imageUrl: 'https://www.planetware.com/wpimages/2019/11/usa-east-coast-best-places-to-visit-new-york-new-york.jpg',
    address:'20 W 34th St., New York, NY 10001, Estados Unidos',
    location:{
        lat: 40.7484405,
        lng:-73.9856644
    },
    creator:'u2'
}
];



const UserPlaces= props => {
    const userId=useParams().userId;
    let FILTER_PLACES=DUMMY_PLACES.filter(places => places.creator===userId)
    return (
        <PlaceList items={FILTER_PLACES}/>
    );
};

export default UserPlaces;