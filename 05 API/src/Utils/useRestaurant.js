import { useEffect, useState } from "react";
import { swiggy_menu_url } from "../../config";

const useRestaurant=(id)=>{

    const [restraurant,setRestaurant]=useState(null);

    // we have to fetch data from the apis

    useEffect(()=>{
        console.log("useEffect");
        fetchData();
    },[]);

    console.log("fetcData");

    const fetchData=async ()=>{

        const data=await fetch(swiggy_menu_url+id);
        const json=await data?.json();
        setRestaurant(json?.data);
    }

    console.log("not eqaul to");

    if(!restraurant){
        console.log("restaruranr"+restraurant);
    }

    // return the value of restaurant

    return restraurant;
}

export default useRestaurant;