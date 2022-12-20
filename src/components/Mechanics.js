import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
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
    <div>
      Mechanics
      {mechanics.map(
        (mechanic) =>
          mechanic.county === countyName && (
            <div key={mechanic.id}>
              <h3>{mechanic.name}</h3>
            </div>
          )
      )}
    </div>
  );
}

export default Mechanics;
