import React from "react";
import { Button } from "@mui/material";

const CheckoutButton = ({ text, size = "small" }) => {
  return (
    <form
      action="https://p01--rsell--srhmcpsmbtfr.code.run/api/payments"
      method="POST"
    >
      <Button
        color="primary"
        variant="outlined"
        size={size}
        type="submit"
        sx={{
          color: "white",
          backgroundColor: "black",
          "&:hover": { backgroundColor: "black", opacity: 0.8 },
        }}
      >
        {text}
      </Button>
    </form>
  );
};

export default CheckoutButton;
