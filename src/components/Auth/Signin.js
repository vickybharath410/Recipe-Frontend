import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
function Signin() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  function onSubmit() {
    const { email, password } = details;
    axios
      .post("https://recipe-backend-psi.vercel.app/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('email',res.data.details.email)
        localStorage.setItem('id',res.data.details.userId)
        navigate("/view");
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className="authpart">
      <form onSubmit={handleSubmit(onSubmit)} className="loginpage">
        <img
          className="logo"
          alt="logo"
          src="https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg"
        />
        <input
          {...register("email", {
            required: "Please enter Email",
          })}
          className="authinput"
          type="email"
          placeholder="Enter your name"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        {errors.email && (
          <span className="error">* {errors.email.message}</span>
        )}
        <input
          placeholder="Enter password"
          className="authinput"
          type="password"
          {...register("password", {
            required: "Please enter Password",
          })}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        {errors.password && (
          <span className="error">* {errors.password.message}</span>
        )}

        <button className="register">Signin</button>
      </form>
      <Link to="/signup">
        <span className="loginpath">Signup</span>
      </Link>
    </div>
  );
}

export default Signin;