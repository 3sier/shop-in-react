import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    alert(`Registered with username: ${username} and password: ${password}`);

    setUsername("");
    setMail("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;

// TODO: Do the login logic
