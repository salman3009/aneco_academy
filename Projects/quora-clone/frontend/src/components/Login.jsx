import React, { useState } from "react";
import Logo from "./Logo";
import "../css/login.css";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slices/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required")
      return;
    }else{
      setError("");
    }

    let obj = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.status === "success") {
          dispatch(
            setLogin({
              userName: result.data.userName,
              email: result.data.email,
            })
          );

          toast.success("Loged in successfully")
          localStorage.setItem("quoraLogin","ture")
          console.log(localStorage)
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }else{
            toast.error("User not found")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Logo />

      <div className="login-body">
        <div className="login-box">
          <h1>Login</h1>
          <hr />
          <form>
            <div className="input-container">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="passowrd"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span style={{color:'red'}}>{error}</span>
            <div className="login-buttons">
              <button onClick={() => navigate("/")}>Back</button>
              <button
                type="submit"
                style={{ fontWeight: "bold" }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          <hr />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
