import React, { useEffect, useContext } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const { setStoredToken, fetchProfile, name, showPosition, countyName } =
    useContext(UserContext);

  useEffect(() => {
    fetchProfile();
    showPosition();
  });

  return (
    <div className="home">
      <div className="home__container" style={{ color: "white" }}>
        <h1>WELCOME TO THE CAR SERVICE APP</h1>
        <h2>
          Find the best mechanics and fuel stations near you in {countyName}
        </h2>
        <div className="home__buttons">
          <Link to="/mechanics" style={{ marginRight: "20px" }}>
            <button className="home__button btn btn-primary ">Mechanics</button>
          </Link>
          <Link to="/fuelstations">
            <button className="home__button btn btn-primary">
              Fuel Stations
            </button>
          </Link>
        </div>
      </div>

      {/* Hello {name}
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
      You are in {countyName}
      <Link to="/fuelstations">Fuel Stations</Link>
      <Link to="/mechanics">Mechanics</Link> */}
    </div>
  );
}

export default Home;
