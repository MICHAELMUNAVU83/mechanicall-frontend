import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [countyName, setCountyName] = useState("");
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const loginFunction = (e) => {
    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
        } else {
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };
  const signUpFunction = (e) => {
    e.preventDefault();

    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        setStoredToken(data.jwt);

        window.location.href = "/";
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  const fetchProfile = async () => {
    await fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setName(data.user.username));
  };
  const showPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=9b2570bb3d51443da6ba9468a530375b`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .catch((error) => {
            console.error("Error:", error);
          })
          .then((response) => {
            setCountyName(response.results[0].components.state);
          });
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        storedToken,
        setStoredToken,
        loginFunction,
        username,
        setUsername,
        password,
        setPassword,
        name,
        email,
        showPosition,
        countyName,

        setEmail,
        signUpFunction,

        fetchProfile,
        latitude,
        longitude,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;
