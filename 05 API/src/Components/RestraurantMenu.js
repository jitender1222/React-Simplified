import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

// import Shimmer from './Shimmer';

import { IMG_CDN_URL,swiggy_menu_url } from '../../config';
import useRestaurant from '../Utils/useRestaurant';

const RestraurantMenu = () => {

    const {id}=useParams();

    const [restraurant,setRestaurant]=useState(null);

    // const restraurant=useRestaurant(id);

    // console.log("restaurant menu cardsss",restraurant);

    const fetchData=async ()=>{
        
        const data=await fetch(swiggy_menu_url+id);
        const json=await data.json();
        setRestaurant(json.data);
    }

    useEffect(()=>{

        fetchData();
    },[]);

    if(!restraurant){
        return null;
    }

    // console.log(restraurant);
  return(
    <>
    <div>
        <h1>Hello world:-{id}</h1>
        <h2>{restraurant?.name}</h2>
        <img src={IMG_CDN_URL + restraurant?.cloudinaryImageId } />
        <h3>{restraurant?.area}</h3>
        <h3>{restraurant?.city}</h3>
        <h3>{restraurant?.avgRating}stars</h3>
        <h3>{restraurant?.costForTwoMsg}</h3>
    </div>
        <h2>Menu</h2>
        <ul>
            {Object.values(restraurant?.menu?.items).map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default RestraurantMenu;