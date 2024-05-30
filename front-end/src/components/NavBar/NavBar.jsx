import React from "react";
import { useAuth } from "../../context/AuthContext";

import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      navigate("/login");
      toast.success("Looged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        {" "}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {auth?.user ? (
                <>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {auth?.user?.name}
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/login"}
                        onClick={handleLogout}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default NavBar;
