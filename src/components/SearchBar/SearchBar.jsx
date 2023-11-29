import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchBar({ products }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search">
      <OutlinedInput
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      {filteredProducts.map((product) => (
        <div key={product._id}>
          <h3>{product.brand}</h3>
          <p>{product.title}</p>
          <p>{product.size}</p>
          <p>{product.condition}</p>
          <p>{product.category}</p>
          <p>
            {product.price} {product.priceUnit}
          </p>
        </div>
      ))}
    </div>
  );
}
