import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import axios from "axios";
import { LoginPage, LoginPageRow } from "./login.styled";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <LoginPage>
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="email"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />
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
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </LoginPageRow>
      </form>
    </LoginPage>
  );
};

export default Register;
