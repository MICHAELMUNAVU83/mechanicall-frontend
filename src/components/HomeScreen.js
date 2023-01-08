import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default HomeScreen;
