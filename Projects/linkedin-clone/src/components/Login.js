import React, { useState } from "react";
import "./../styles/Login.css";
import userMap from "../mock_backend/UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/Users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [errorLogin, toggleErrorLogin] = useState(false);
  const [errorRegister, toggleErrorRegister] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userMap.has(username)) {
      if (userMap.get(username).password === password) {
        dispatch(
          login({
            id: userMap.get(username).id,
            name: userMap.get(username).name,
            username: username,
            isLoggedIn: true,
          })
        );
        navigate(`/dashboard/${userMap.get(username).id}`);
      } else {
        toggleErrorLogin(true);
      }
    } else {
      toggleErrorLogin(true);
    }
  };

  const handleRegister = () => {
    if (
      username.length < 4 ||
      !username.includes("@") ||
      !username.includes(".")
    ) {
      toggleErrorRegister(true);
      return;
    }
    if (password.length < 4) {
      toggleErrorRegister(true);
      return;
    }
    if (name.length < 3) {
      toggleErrorRegister(true);
      return;
    }

    if (userMap.has(username)) {
      alert("User already Exists");
    } else {
      userMap.set(username, {
        id: userMap.size + 1,
        name: name,
        password: password,
      });
      setRegister(!register);
    }
  };

  return (
    <div className="container">
      {!register ? (
        <>
          <div className="logo">
            <h2>
              linked
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </h2>
          </div>
          <div className="intro">
            <h1 className="intro--title">Sign in</h1>
            <p className="intro--text">
              Stay updated on your professional world
            </p>

            <div className="inputs">
              <div className="input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              {errorLogin ? (
                <a className="links">Invalid Username Or Password</a>
              ) : (
                ""
              )}
              <button className="btn" onClick={handleLogin}>
                Sign in
              </button>
            </div>
          </div>
          <div className="footer">
            <p className="intro--text">New to linkedIn?</p>
            <a
              onClick={() => {
                setRegister(!register);
              }}
              className="links"
            >
              Join now
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="logo">
            <h2>
              linked
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </h2>
          </div>
          <div className="intro">
            <h1 className="intro--title">Register</h1>
            <p className="intro--text">
              Stay updated on your professional world
            </p>

            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  name="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  required
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              {errorRegister ? (
                <a className="links">
                  Please Enter A Valid Name, Email & Password
                </a>
              ) : (
                ""
              )}
              <button className="btn" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
          <div className="footer">
            <p className="intro--text">Already A User?</p>
            <a
              onClick={() => {
                setRegister(!register);
              }}
              className="links"
            >
              Sign In
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
