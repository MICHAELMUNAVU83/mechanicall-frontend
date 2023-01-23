import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

const Navbar = ({ storedToken }) => {
  const { setStoredToken, name } = useContext(UserContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/mechanics">
                  Hello {name}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/mechanics">
                  Mechanics
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/fuelstations">
                  Fuel Stations
                </Link>
              </li>
              {storedToken ? (
                <li class="nav-item">
                  <button
                    onClick={() => {
                      localStorage.setItem("token", "");
                      setStoredToken("");
                    }}
                    className="btn btn-danger"
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    signup
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
