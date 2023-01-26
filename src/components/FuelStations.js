import React, { useEffect, useContext, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { GiAutoRepair, GiTowTruck } from "react-icons/gi";
import { FaOilCan } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import "./Mechanics.css";
import { GiFuelTank } from "react-icons/gi";

import { UserContext } from "../context";
function FuelStations() {
  const { countyName, showPosition } = useContext(UserContext);
  const [fuelStations, setFuelStations] = useState([]);

  useEffect(() => {
    showPosition();
    fetch("https://mechanicall-backend.herokuapp.com/api/v1/fuel_stations", {
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
    <>
      <h1 class="text-center">
        <GiFuelTank /> FuelStations
      </h1>
      <div class="container mt-5 mb-3">
        <div class="row">
          {fuelStations.map(
            (mechanic) =>
              mechanic.county === countyName && (
                <div class="col-md-4">
                  <div class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <img
                          src={mechanic.logo}
                          class="image"
                          alt={mechanic.name}
                        />

                        <div class="ms-2 c-details">
                          <h6 class="mb-0">{mechanic.name}</h6>
                          <span style={{ fontSize: "15px" }}>
                            <strong>{mechanic.distance}</strong> from you
                          </span>
                        </div>
                      </div>
                      <div class="badge">
                        <span>
                          <a
                            href={`tel:${mechanic.phone_number}`}
                            style={{ color: "green", fontSize: "20px" }}
                          >
                            <BiPhoneCall />{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="mt-2">
                      <h3 class="heading">{mechanic.name}</h3>
                      <span class="text1">{mechanic.description}</span>
                      <div class="mt-2">
                        <div
                          class="d-flex flex-row justify-content-between"
                          style={{ fontSize: "20px", color: "grey" }}
                        >
                          <div class="d-flex flex-column align-items-center">
                            <BsCashCoin style={{ color: "green" }} />
                            discounts
                          </div>
                          <div class="d-flex flex-column align-items-center">
                            <GiTowTruck style={{ color: "green" }} />
                            towing
                          </div>
                          <div class="d-flex flex-column align-items-center">
                            <GiAutoRepair style={{ color: "green" }} />
                            repairs
                          </div>
                          <div class="d-flex flex-column align-items-center">
                            <FaOilCan style={{ color: "green" }} />
                            oil change
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div></div>
    </>
  );
}

export default FuelStations;
