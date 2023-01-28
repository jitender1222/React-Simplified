import React from "react";

import  ReactDOM from "react-dom/client";

import Header from "./Components/Header"
import Hero from "./Components/Hero";

import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App=()=>{
    return(
        <>
       <Header />
       <Outlet />
       <Footer />
       </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Hero />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ]
    },


])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);