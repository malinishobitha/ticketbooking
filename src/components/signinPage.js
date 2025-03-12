import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Signin.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Yarunalum login panna allow pannalam (NO PASSWORD CHECK)
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/"); 
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
