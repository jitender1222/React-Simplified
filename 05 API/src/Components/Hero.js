import React, { useEffect, useState } from "react";

import Card from "./Card";

import { swiggy_api_URL } from "../../config";

import Shimmer from "../Components/Shimmer";
import { Link } from "react-router-dom";

import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

const Hero=()=>{

  const [restraunt,setRestraunt]=useState([]);

  const [filterText,setFilterText]=useState([]);

  const [searchText,setSearchText]=useState("");

  const [error,setError]=useState("");


  const fetchData=async ()=>{
    
    const data=await fetch(swiggy_api_URL);
    const json=await data.json();
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

  const isOnline=useOnline();

  if(!isOnline){
    return <h1>Oflline please check your internet connection</h1>
  }

  if(restraunt===null) return null;

  // {setError && <div className="error-container">{error}</div>}

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
          return <Link to={"/restraurant/"+item.data.id}  key={item.data.id} > <Card {...item.data}/> </Link>
        })
      }
    </div>
    </>
  )
}

export default Hero;