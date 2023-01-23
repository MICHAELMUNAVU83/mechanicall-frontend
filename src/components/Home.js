import React, { useContext } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

import "./Home.css";
function Home() {
  const { name, countyName } = useContext(UserContext);

  return (
    <div className="my-3">
      <div className="home">
        <div className="home__container">
          <h1>HELLO {name.toUpperCase()} WELCOME TO THE CAR SERVICE APP</h1>
          <h2>
            Find the best mechanics and fuel stations near you in {countyName}
          </h2>
          <div className="home__buttons">
            <Link to="/mechanics" style={{ marginRight: "20px" }}>
              <button className="home__button btn btn-primary ">
                Mechanics
              </button>
            </Link>
            <Link to="/fuelstations">
              <button className="home__button btn btn-primary">
                Fuel Stations
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default Home;
