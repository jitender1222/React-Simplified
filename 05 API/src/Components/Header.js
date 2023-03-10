import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  const [button,setButton]=useState(true);
  return (
    <div className="flex">
      <div>
        <a href="/">
          <img
            className="img"
            src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
            alt="image"
          />
        </a>
      </div>
      <div>
        <ul className="list">
          <Link to="/">
            <li>Home</li>
            </Link>
          <Link to="/about">
          <li>About</li>
          </Link>

          <Link to="/contact">
          <li>Contact</li>
          </Link>  
          <li>Call Us</li>

          <div>
            {
              button?<button className="btn" 
              onClick={()=>{
                setButton(false);
              }}>
                Login</button> 
                :<button className="btn" 
                onClick={()=>{
                  setButton(true);
              }}
              >LogOut</button>
            }
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
