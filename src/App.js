import React, { useEffect, useContext } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddMechanics from "./components/AddMechanics";
import FuelStations from "./components/FuelStations";
import Mechanics from "./components/Mechanics";
import { UserContext } from "./context";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";

function App() {
  const { storedToken, fetchProfile, name } = useContext(UserContext);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <div>
      {storedToken ? (
        <Router>
          <Navbar storedToken={storedToken} name={name} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fuelstations" element={<FuelStations />} />
            <Route path="/mechanics" element={<Mechanics />} />

            {name === "admin" && (
              <Route path="/addmechanics" element={<AddMechanics />} />
            )}
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
