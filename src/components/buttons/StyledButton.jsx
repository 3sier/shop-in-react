import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({ text, handleClick, size = "small" }) => {
  return (
    <Button
      color="primary"
      variant="outlined"
      size={size}
      onClick={handleClick}
      type="submit"
      sx={{
        color: "white",
        backgroundColor: "black",
        "&:hover": { backgroundColor: "black", opacity: 0.8 },
      }}
    >
      {text}
    </Button>
  );
};

export default StyledButton;
