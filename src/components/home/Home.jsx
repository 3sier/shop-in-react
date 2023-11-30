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
    </div>
  );
};

export default Home;
