import React, { useEffect, useContext } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";
function Home() {
  const { setStoredToken, fetchProfile, name, showPosition, countyName } =
    useContext(UserContext);

  useEffect(() => {
    fetchProfile();
    showPosition();
  });

  return (
    <div>
      Hello {name}
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
      <Link to="/mechanics">Mechanics</Link>
    </div>
  );
}

export default Home;
