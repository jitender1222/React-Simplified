import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';

import { IMG_CDN_URL } from '../../config';

const RestraurantMenu = () => {

    const [restraurant,setRestaurant]=useState(null);
    const {resid}=useParams();
    const {id}=useParams();
    console.log(id);
    console.log(resid);

    const fetchData=async ()=>{

        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.7040592&lng=77.10249019999999&menuId="+id);
        const json=await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    useEffect(()=>{

        fetchData();
    },[]);

    if(!restraurant){
        return null;
    }

  return(
    <>
    <div>
        <h1>Hello world:-{id}</h1>
        <h2>{restraurant.name}</h2>
        <img src={IMG_CDN_URL + restraurant.cloudinaryImageId } />
        <h3>{restraurant.area}</h3>
        <h3>{restraurant.city}</h3>
        <h3>{restraurant.avgRating}stars</h3>
        <h3>{restraurant.costForTwoMsg}</h3>
    </div>
        <h2>Menu</h2>
        <ul>
            {console.log("hello")}
            {Object.values(restraurant?.menu?.items).map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default RestraurantMenu;