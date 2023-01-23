import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import { BiLocationPlus } from "react-icons/bi";

function MapComponent() {
  const [essentials, setEssentials] = useState([]);
  useEffect(() => {
    fetch("/api/v1/essentials")
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
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <NavigationControl showCompass={true} position="bottom-right" />
        {essentials.map((restaurant) => (
          <Marker
            color="red"
            key={restaurant.id}
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
          >
            <BiLocationPlus style={{ fontSize: "30px" }} />
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
