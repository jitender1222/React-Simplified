import React from "react";

import  ReactDOM from "react-dom/client";

import Header from "./Components/Header"
import Hero from "./Components/Hero";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";

const App=()=>{
    return(
        <>
       <Header />
       <Hero />
       </>
    )
}

const AppRouter=createBrowserRouter([

    {
        path:"/",
        element:<App />,
        errorElement:<Error />
    },

    {
        path:"/about",
        element:<About />
    }


])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);