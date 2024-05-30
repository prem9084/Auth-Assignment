import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./PrivetRoute/PrivetRoute";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
