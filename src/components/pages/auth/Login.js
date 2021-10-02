import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import axios from "axios";
import { LoginPage, LoginPageRow } from "./login.styled";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <LoginPage>
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <LoginPageRow>
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </LoginPageRow>
      </form>
    </LoginPage>
  );
};

export default Login;
