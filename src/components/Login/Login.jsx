import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="mail"
        placeholder="Mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

// TODO: Do the register logic
