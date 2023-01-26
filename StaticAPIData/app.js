import React from "react";

import ReactDOM from "react-dom/client";

const Logo = () => (
  <a href="/">
    <img
      className="img"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
      alt="image"
    />
  </a>
);

const data = [
  {
    name: "Victoria Flowers",
    phone: "(674) 341-4333",
    email: "ut.cursus.luctus@google.org",
    list: 3,
    currency: "$78.85",
  },
  {
    name: "Shoshana Boyd",
    phone: "(363) 573-2115",
    email: "dui.cras.pellentesque@icloud.com",
    list: 1,
    currency: "$80.32",
  },
  {
    name: "Adria Price",
    phone: "(442) 253-6863",
    email: "rhoncus@hotmail.com",
    list: 19,
    currency: "$43.75",
  },
  {
    name: "Virginia Gilliam",
    phone: "1-422-781-3472",
    email: "fusce.diam@protonmail.com",
    list: 3,
    currency: "$42.62",
  },
  {
    name: "Kylee Faulkner",
    phone: "(253) 344-6933",
    email: "tellus.lorem@outlook.org",
    list: 1,
    currency: "$3.57",
  },
];

const Card = (props) => {
  return (
    <div className="cards">
      <img
        className="food"
        src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
        alt="image"
      />
      <h3>name-{props.name}</h3>
      <h3>email-{props.email}</h3>
      <h3>phone-{props.phone}</h3>
      <h3>curr$-{props.currency}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
    {/* <Card {...data[0]} />
    <Card {...data[1]}/>
    <Card {...data[2]}/>
    <Card {...data[3]}/>
    <Card {...data[4]}/> SPREAD OPERATOR  */}

    {
        data.map((dataa)=>{

            return(

                <Card {...dataa}/>
                
            )

            // by using map
        })
    }
    </div>
  );
};

const App = () => {
  return (
    <div>

      <div className="flex">
        <Logo />
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Call Us</li>
        </ul>
      </div>
      
      <Body />

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
