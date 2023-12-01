import React, { useState, useEffect } from "react";
import Video from ".././Video/homevideo.mp4";

import PopularBrands from "../PopularBrands/PopularBrands";
import StaffPicks from "../StaffPicks/StaffPicks";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://p01--rsell--srhmcpsmbtfr.code.run/api/products/"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <h1 className="welcome">welcome</h1>
      <PopularBrands />
      <StaffPicks />
=======
    <div className="home">
      <div className="home-container">
        <div>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <PopularBrands />
        <StaffPicks />
      </div>
>>>>>>> b944e671477f9ebb602fe27e8b3e230b216870b7
    </div>
  );
};

export default Home;
