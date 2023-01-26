import React, { useEffect, useState } from "react";

import Card from "./Card";

import { swiggy_api_URL } from "../../config";


export default Hero = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const req = await fetch(swiggy_api_URL);

      const json = await req.json();

      let data = json?.data?.cards[2]?.data?.data?.cards;

      setData(data);
    } catch (error) {
      console.log("this is ans " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="search">
          <input type="text" placeholder="Enter your text"></input>
        </div>

        <div className="resCard">
          {data.map((datas) => {
            console.log(datas)
            return <Card {...datas.data} key={datas.data.id} />;
          })}
        </div>
      </div>
    </>
  );
};
