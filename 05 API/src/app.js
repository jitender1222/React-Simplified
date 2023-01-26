import React from "react";

import  ReactDOM from "react-dom/client";

import Header from "./Components/Header"
import Hero from "./Components/Hero";

const App=()=>{
    return(
        <>
       <Header />
       <Hero />
       </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);