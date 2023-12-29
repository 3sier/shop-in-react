import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import { Grid } from "@mui/material";

const StaffPicks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/");
        let data = await response.json();

        data.sort(() => Math.random() - 0.5);

        data = data.slice(0, 3);

        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Staff Picks</h1>

      <Grid container spacing={2} p={5} justify="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={product._id}>
            <Product id={product._id} {...product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StaffPicks;
