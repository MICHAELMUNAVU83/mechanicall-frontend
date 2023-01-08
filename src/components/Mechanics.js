import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
import "./Mechanics.css";
function Mechanics() {
  const { countyName, showPosition } = useContext(UserContext);
  const [mechanics, setMechanics] = useState([]);
  useEffect(() => {
    showPosition();
    fetch("/api/v1/mechanics", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMechanics(data));
  }, [showPosition]);

  return (
    <>
      <div class="container mt-5 mb-3">
        <div class="row">
          {mechanics.map(
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
                          <h6 class="mb-0">Mailchimp</h6>
                          <span>1 days ago</span>
                        </div>
                      </div>
                      <div class="badge">
                        {" "}
                        <span>Design</span>{" "}
                      </div>
                    </div>
                    <div class="mt-5">
                      <h3 class="heading">
                        Senior Product
                        <br />
                        Designer-Singapore
                      </h3>
                      <div class="mt-5">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="mt-3">
                          {" "}
                          <span class="text1">
                            32 Applied <span class="text2">of 50 capacity</span>
                          </span>{" "}
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

export default Mechanics;
