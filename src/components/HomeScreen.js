import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import log from "../images/log.png";

const HomeScreen = () => {
  return (
    <div class="container-fluid splash-intro">
      <section class="splash">
        <div class="splash-image mt-5">
          <img
            src={log}
            alt="logo"
            className="logo-img"
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div class="splash-text">
          <p>
            Welcome to our website! If you're ever stuck on the road and need
            some help, we've got you covered. Our comprehensive directory of
            fuel stations, toll services, and mechanics is here to help you get
            back on track. Whether you need a quick fill-up or some more
            extensive repairs, we've got the resources you need to get moving
            again. Thanks for choosing our website, and don't hesitate to reach
            out if you have any questions or need further assistance."
          </p>
        </div>
        <div class="splash-button">
          <div>
            <Link
              className="btn btn-primary sign-up"
              to="/signup"
              style={{ marginRight: "30px" }}
            >
              Sign up
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-primary login"
              to="/login"
              style={{ borderRadius: "40px" }}
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
