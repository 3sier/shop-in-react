import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./PopularBrands.css";

const PopularBrands = () => {
  const brands = [
    {
      link: "https://www.instagram.com/kapitalglobal",
      logo: "https://i.ibb.co/qn7sDpT/kapital.png",
    },
    {
      link: "https://www.instagram.com/rickowensonline",
      logo: "https://i.ibb.co/DkY62jk/rickowens.png",
    },
    {
      link: "https://www.instagram.com/maisonmargiela",
      logo: "https://i.ibb.co/93zzXmH/maisonmargiela.png",
    },
    {
      link: "https://www.instagram.com/nike",
      logo: "https://i.ibb.co/RBDkVbZ/nike.png",
    },
  ];

  return (
    <div className="popular-brands-container">
      <h1 className="popular-brands-heading">Popular Brands</h1>
      <Grid container spacing={3}>
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="brand-item">
              <Link to={brand.link}>
                <img
                  src={brand.logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="brand-logo"
                />
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PopularBrands;
