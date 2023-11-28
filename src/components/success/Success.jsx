import { Grid } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import StyledButton from "../buttons/StyledButton";

const Success = () => {
  const handleClick = () => {
    window.location.href = "/home";
  };
  return (
    <Grid container spacing={2} justifyContent="center" mt={10}>
      <Grid item xs={6} sm={6} md={6} lg={4} textAlign="center">
        <CheckCircleOutlineOutlinedIcon
          sx={{
            fontSize: 75,
          }}
        />
        <h1 className="text-2xl font-semibold text-center">
          Payment Successful!
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
        <StyledButton
          text="Back to store"
          handleClick={handleClick}
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Success;
