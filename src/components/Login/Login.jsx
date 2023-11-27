import React, { useState } from "react";
import "./Login.css";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import Swal from "sweetalert2";
import StyledButton from "../buttons/StyledButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const requestBody = {
      username: username,
      password: password,
    };
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Length": JSON.stringify(requestBody).length.toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          localStorage.setItem("token", data.access_token);
          setIsLoggedIn(true); // Set isLoggedIn to true
          window.location.href = "/home";
        });
      } else {
        Swal.fire({
          title: "Login failed",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  return (
    <div className="login-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {isLoggedIn ? (
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome, {username}!
        </Typography>
      ) : (
        <Stack direction="column" spacing={2}>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlined width={20} />
              </InputAdornment>
            }
            placeholder="Username"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined width={20} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleTogglePasswordVisibility}>
                  {showPassword ? (
                    <VisibilityOffOutlined width={20} />
                  ) : (
                    <VisibilityOutlined width={20} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            placeholder="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="new-password"
            value={password}
            fullWidth
          />
          <Box mt={2}>
            <StyledButton text="Login" handleClick={handleLogin} size="large" />
          </Box>
        </Stack>
      )}
    </div>
  );
};

export default Login;
