import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function MapComponent() {
  const [essentials, setEssentials] = useState([]);
  useEffect(() => {
    fetch("https://mechanicall-backend-api.herokuapp.com/api/v1/essentials")
      .then((res) => res.json())
      .then((data) => setEssentials(data));
  }, []);
  return (
    <>
      <Map
        style={{
          margin: "auto",
          width: "500px",
          marginTop: "20px",
          height: "500px",
          border: "2px solid black",
          borderRadius: "5px",
        }}
        initialViewState={{
          latitude: -1.102554,
          longitude: 37.013193,
          zoom: 10,
        }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
        } // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <NavigationControl showCompass={true} position="bottom-right" />
        {essentials.map((essential) => (
          <Marker
            color="red"
            key={essential.id}
            latitude={essential.latitude}
            longitude={essential.longitude}
          >
            {/* gas station */}

            <Link
              to={essential.route}
              style={{ color: "black" }}
              className="text-decoration-none"
            >
              {essential.name}
              <i className={essential.icon} style={{ fontSize: "30px" }}></i>
            </Link>
          </Marker>
        ))}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
        />

        <FullscreenControl container={document.querySelector("body")} />
      </Map>
    </>
  );
}

export default MapComponent;
