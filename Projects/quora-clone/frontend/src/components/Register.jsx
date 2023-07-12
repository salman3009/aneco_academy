import React, { useState } from "react";
import Logo from "./Logo";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";



const Register = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [passowrd, setPassword] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    if (!userName || !email || !passowrd){
      setError("All fields are required");
      return;
    }else{
      setError("");
    }

    const data = {
      userName: userName,
      email: email,
      password: passowrd
    }

    fetch("http://localhost:4000/register",{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      if (data.status === 'success'){
        toast.success("Registerd successfully")
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }else{
        setError(data.error)
        toast.error("Register not successfull")
      }
    })
    console.log(data)
   
  }


  return (
    <div className="register">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Logo />
      <div className="register-body">
        <div className="register-box">
          <h1>Register</h1>
          <hr />
          <form>
            <div className="input-container">
              <label htmlFor="username">User Name: </label>
              <input
                type="text"
                name="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
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
            <span style={{color:"red"}}>{error}</span>
            <div className="register-buttons">
              <button onClick={() => navigate("/")}>Back</button>
              <button
                type="submit"
                style={{ fontWeight: "bold" }}
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
          <hr />
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
