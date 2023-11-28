import { Grid } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StyledButton from "../buttons/StyledButton";

const Cancel = () => {
  const handleClick = () => {
    window.location.href = "/home";
  };

  return (
    <Grid container spacing={2} justifyContent="center" mt={10}>
      <Grid item xs={6} sm={6} md={6} lg={4} textAlign="center">
        <CancelOutlinedIcon
          sx={{
            fontSize: 75,
          }}
        />
        <h1 className="text-2xl font-semibold text-center">Payment Canceled</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Your payment has been canceled. If you have any questions, please
          contact our support team.
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

export default Cancel;
