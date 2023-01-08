import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
function FuelStations() {
  const { countyName, showPosition } = useContext(UserContext);
  const [fuelStations, setFuelStations] = useState([]);
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
              
              <h3>{fuelStation.name}</h3>
            </div>
          )
      )}
    </div>
  );
}

export default FuelStations;
