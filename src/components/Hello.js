import React, { useEffect, useState , useContext} from "react";
import { UserContext } from "../context";
function Hello() {
  const { setStoredToken } = useContext(UserContext);
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setName(data.user.username));
  }, []);

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
    </div>
  );
}

export default Hello;
