import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
function FuelStations() {
  const { countyName, showPosition } = useContext(UserContext);
  const [fuelStations, setFuelStations] = useState([]);
  cl
  useEffect(() => {
    showPosition();
    fetch("/api/v1/fuel_stations", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFuelStations(data));
  }, [showPosition]);

  return (
    <div>
      FuelStations
      {fuelStations.map(
        (fuelStation) =>
          fuelStation.county === countyName && (
            <div key={fuelStation.id}>
              <img src={fuelStation.logo} alt={fuelStation.name} />
              <h3>{fuelStation.name}</h3>
              <p>{fuelStation.description}</p>
            </div>
          )
      )}
    </div>
  );
}

export default FuelStations;
