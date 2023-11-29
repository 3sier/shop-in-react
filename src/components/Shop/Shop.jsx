import React, { useState, useEffect, useMemo } from "react";
import { Grid, Box, Button } from "@mui/material";
import Product from "../Products/Product";

function ShopTab() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

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

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, products, productsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1>Shop</h1>
      <Grid container spacing={3} p={2}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={product._id}>
            <Product
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

      <Box display="flex" justifyContent="center" m={1} p={1}>
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
          (number) => (
            <Button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              style={{ backgroundColor: "white", color: "black" }}
            >
              {number + 1}
            </Button>
          )
        )}
      </Box>
    </div>
  );
}

export default ShopTab;
