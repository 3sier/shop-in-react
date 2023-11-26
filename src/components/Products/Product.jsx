import { CardMedia } from "@mui/material";

const Product = ({
  id,
  imgs,
  title,
  brand,
  price,
  condition,
  size,
  category,
  priceUnit,
}) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "100%",
          }}
          image={imgs.front}
        />
      </div>
      <div className="product-info-container">
        <h3>{brand}</h3>

        <p>{title}</p>
        <p>
          Price: {price} {priceUnit}
        </p>
        <p>Condition: {condition}</p>
        <p>Size: {size}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default Product;
