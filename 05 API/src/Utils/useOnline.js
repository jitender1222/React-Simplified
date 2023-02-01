import { useEffect, useState } from "react";

const useOnline=()=>{

    const [isOnline,setIsOnline]=useState(true);

    const handleOnline=()=>{
        setIsOnline(true);
    }

    const handleOffline=()=>{
        setIsOnline(false);
    }

    useEffect(()=>{

        window.addEventListener("online",()=>{
            setIsOnline(true);
        });

        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });

        return ()=>{

            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }

    },[]);

    return isOnline;
}


export default useOnline;