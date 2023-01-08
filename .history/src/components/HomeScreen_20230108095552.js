import React from "react";
import { Link } from "react-router-dom";


const HomeScreen = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <div class="container-fluid splash-intro">
        <section class="splash">
          <div class="splash-image"></div>

          <div class="splash-text">
            <p>
              Lifeline medics is an innovation that will incorporate NFC
              hardware and medical records to revolutionise how data is stored.
              We at lifeline will provide smart ornaments that store medical
              records on an easy walk around ornament i.e. a ring, wristband.{" "}
            </p>
          </div>
          <div class="splash-button">
            <Link className="btn btn-primary login" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary sign-up" to="/signup">
              Sign up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
