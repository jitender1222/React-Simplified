import React from "react";

const Header = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Call Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
