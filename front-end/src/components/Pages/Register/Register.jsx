import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LockOpenIcon from "@mui/icons-material/LockOpen";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        dob,
      });
      if (data.success) {
        navigate("/login");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
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
            Have not an Account?{" "}
            <Link to="/login" className="text-decoration-none">
              Click
            </Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-light"
            >
              Name
            </label>
            <div className="d-flex bg-light rounded">
              <div className="PerIcon ">
                <PersonIcon />
              </div>{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="d-flex bg-light rounded mb-4">
            <div className="PerIcon ">
              <DateRangeIcon />
            </div>{" "}
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
              id="exampleInputDate1"
              aria-describedby="DateHelp"
            />
          </div>
          <div className="d-flex bg-light rounded mb-4">
            <div className="PerIcon ">
              <MailIcon />
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

          <div className="d-flex bg-light  rounded mb-4">
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
          <button type="submit" className="btn btn-info text-light w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
