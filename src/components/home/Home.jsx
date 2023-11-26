import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import { Grid } from "@mui/material";

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
      <h1>Product List</h1>
      <Grid container spacing={3} m={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Product
              key={product._id}
              id={product._id}
              imgs={product.imgs}
              brand={product.brand}
              title={product.title}
              size={product.size}
              condition={product.condition}
              category={product.category}
              price={product.price}
              priceUnit={product.priceUnit}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
