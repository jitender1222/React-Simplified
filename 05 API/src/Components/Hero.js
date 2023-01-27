import React, { useEffect, useState } from "react";

import Card from "./Card";

import { swiggy_api_URL } from "../../config";

import Shimmer from "../Components/Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}


const Hero=()=>{

  const [restraunt,setRestraunt]=useState([]);

  const [filterText,setFilterText]=useState([]);

  const [searchText,setSearchText]=useState("");


  const fetchData=async ()=>{
    
    const data=await fetch(swiggy_api_URL);
    const json=await data.json();
    console.log(json);
    setRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilterText(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return restraunt?.length===0? (<Shimmer />):(
    <>
    <div className="input-type">
      <input type="text" placeholder="Search"
      onChange={(e)=>{(
        setSearchText(e.target.value)
      )}}
      ></input>
      <button onClick={()=>{
        const data=filterData(searchText,restraunt);
        setFilterText(data);
      }}>Search</button>
    </div>
    <div className="restaurant-list">
      {
        filterText.map((item)=>{
          return <Card {...item.data} key={item.data.id} />
        })
      }
    </div>
    </>
  )
}

export default Hero;