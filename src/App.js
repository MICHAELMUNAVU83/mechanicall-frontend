import React, { useEffect, useContext } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import { UserContext } from "./context";

function App() {
  const { storedToken } = useContext(UserContext);

  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  return (
    <div>
      <Router>
        <Routes>
          {storedToken ? (
            <Route path="/" element={<Hello />} />
          ) : (
            <Route path="/" element={<SignUp />} />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
