import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Grid } from "@mui/material";
import "./ShowProduct.css";
import CheckoutButton from "../buttons/CheckoutButton";

export default function Productdetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const addToCart = () => {
    const requestBody = {
      productId: product.id,
      quantity: 1,
    };

    fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: {
        "Content-Length": JSON.stringify(requestBody).length.toString(),
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          console.log(data);
        });
      } else {
        console.log("error");
      }
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/id/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="product-detail-container">
        <Grid container spacing={3} p={5}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className="product-detail-info-container">
              <h3>{product.brand}</h3>
              <p>{product.title}</p>
              <p>
                Price: {product.price} {product.priceUnit}
              </p>
              <p>Condition: {product.condition}</p>
              <p>Size: {product.size}</p>
              <p>Category: {product.category}</p>
              <Box mt={2} className="product-details">
                <CheckoutButton text="Buy now" size="small" />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8}>
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={product.imgs.front}
            />
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={product.imgs.back}
            />
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={product.imgs.model}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
