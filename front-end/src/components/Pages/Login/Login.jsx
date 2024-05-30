import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useAuth } from "../../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (data.success) {
        toast.success(data.message);
        navigate("dashboard");
      } else {
        toast.error(data.message);
      }
      setAuth({
        ...auth,
        user: data.user,
        token: data.token,
      });
      localStorage.setItem("auth", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-content-center register">
      <div className="form">
        <div className="sign">
          <Link className="btn bg-info w-50 p-3  text-decoration-none text-light fw-bold">
            SIGN IN
          </Link>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <p className="text-light">
            Already have an Account?{" "}
            <Link to="/register" className="text-decoration-none">
              Click
            </Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-light"
            >
              Email address
            </label>
            <div className="d-flex bg-light rounded">
              <div className="PerIcon ">
                <PersonIcon />
              </div>{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-light"
            >
              Password
            </label>
            <div className="d-flex bg-light  rounded">
              <div className="PerIcon">
                <LockOpenIcon />
              </div>{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                aria-describedby="PasswordHelp"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-info text-light w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
