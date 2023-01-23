import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from "react-map-gl";
import "./Home.css";
function Home() {
  const [mechanics, setMechanics] = useState([]);
  const {
    setStoredToken,
    fetchProfile,
    name,
    showPosition,
    countyName,
    latitude,
    longitude,
  } = useContext(UserContext);

  console.log(latitude, longitude);

  useEffect(() => {
    fetchProfile();
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
    <div className="home">
      <div className="home__container" style={{ color: "white" }}>
        <h1>HELLO {name.toUpperCase()} WELCOME TO THE CAR SERVICE APP</h1>
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
        <Map
          style={{
            margin: "auto",
            width: "500px",
            height: "500px",
            border: "2px solid black",
            borderRadius: "5px",
          }}
          initialViewState={{
            latitude: -1.1075584,
            longitude: 37.027885,
            zoom: 10,
          }}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // This is the token we got from Mapbox
          mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
        >
          <NavigationControl showCompass={true} position="bottom-right" />
          {mechanics.map((restaurant) => (
            <Marker
              color="blue"
              key={restaurant.id}
              latitude={restaurant.latitude}
              longitude={restaurant.longitude}
            >
              <i
                className="fa-solid fa-car"
                onClick={(e) => {
                  alert(restaurant.name);
                }}
              ></i>
            </Marker>
          ))}
          {/* {selectedRestaurant ? (
            <Popup
              latitude={selectedRestaurant.latitude}
              longitude={selectedRestaurant.longitude}
              onClose={() => {
                setSelectedRestaurant(null);
              }}
            >
              <div>{selectedRestaurant.name}</div>
            </Popup>
          ) : null} */}

          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={true}
          />

          <FullscreenControl container={document.querySelector("body")} />
        </Map>
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
