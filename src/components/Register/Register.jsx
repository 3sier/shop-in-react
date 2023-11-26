import React, { useState } from "react";
import "./Register.css";
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
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    if (username === "" || name === "" || email === "" || password === "") {
      Swal.fire({
        title: "Please fill all the fields",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (password.length < 8) {
      Swal.fire({
        title: "Password must be at least 8 characters",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!email.includes("@")) {
      Swal.fire({
        title: "Email must be valid",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!email.includes(".")) {
      Swal.fire({
        title: "Email must be valid",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (username.length < 2) {
      Swal.fire({
        title: "Username must be at least 2 characters",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (name.length < 3) {
      Swal.fire({
        title: "Name must be at least 3 characters",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    //username does not containe spaces or special characters
    if (username.includes(" ")) {
      Swal.fire({
        title: "Username must not contain spaces",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (regex.test(username)) {
      Swal.fire({
        title: "Username must not contain special characters",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    if (emojiRegex.test(username)) {
      Swal.fire({
        title: "Username must not contain emojis",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Length": JSON.stringify(requestBody).length.toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "Register success",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.href = "/login";
        });
        resetForm();
      } else {
        Swal.fire({
          title: "Register failed",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  const resetForm = () => {
    setUsername("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <Stack direction="column" spacing={2}>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <PersonOutlined width={20} />
            </InputAdornment>
          }
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <PersonOutlined width={20} />
            </InputAdornment>
          }
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <AlternateEmailIcon width={20} />
            </InputAdornment>
          }
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
      </Stack>
      <Box mt={2}>
        <StyledButton
          text="Register"
          handleClick={handleRegister}
          size="large"
        />
      </Box>
    </div>
  );
};

export default Register;
