import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Video from "../../components/Video/Walking.mp4";
import PopularBrands from "../PopularBrands/PopularBrands";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
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
      <PopularBrands />
    </div>
  );
};

export default Home;
