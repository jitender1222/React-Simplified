import { useEffect, useState } from "react";
import { swiggy_menu_url } from "../../config";

const useRestaurant=(id)=>{

    const [restraurant,setRestaurant]=useState(undefined);
    console.log("restaurant"+" "+restraurant);

    // we have to fetch data from the apis

    useEffect(()=>{
        console.log("useEffect");
        fetchData();
    },[]);

    console.log("fetcData");

    const fetchData=async ()=>{

        console.log("fetch data");
        const data=await fetch(swiggy_menu_url+id);
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    console.log("not eqaul to");

    if(!restraurant){
        console.log("restaruranr"+restraurant);
    }

    // return the value of restaurant

    return restraurant;
}

export default useRestaurant;