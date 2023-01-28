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

  const [error,setError]=useState("");


  const fetchData=async ()=>{
    
    const data=await fetch(swiggy_api_URL);
    const json=await data.json();
    console.log(json);
    setRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilterText(json?.data?.cards[2]?.data?.data?.cards);
  }

  const searchData=(searchText,restaurant)=>{

    if(searchText!==" "){
      const data=filterData(searchText,restaurant);
      setFilterText(data);
      setError("");

    if(data.length===0)
      setError("No matches found");
  }
}

  useEffect(()=>{
    fetchData();
  },[])

  if(restraunt===null) return null;

  // {setError && <div className="error-container">{error}</div>}

  

  console.log(error);

  return restraunt?.length===0? (<Shimmer />):(
    <>
    <div className="input-type">
      <input type="text" placeholder="Search"
      onChange={(e)=>{(
        setSearchText(e.target.value)
      )}}
      ></input>
      <button onClick={()=>{
        searchData(searchText,restraunt);
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