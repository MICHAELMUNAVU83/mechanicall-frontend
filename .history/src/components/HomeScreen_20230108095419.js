import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <div class="container-fluid splash-intro">
    <section class="splash">

        <div class="splash-image">
            <%= image_tag "logo.png" , class: "logo-img" %>

        </div>

        <div class="splash-text">
            <p>Lifeline medics is an innovation that will incorporate NFC hardware and medical records to revolutionise how data is stored. We at lifeline will provide smart ornaments that store medical records on an easy walk around ornament i.e. a ring, wristband. </p>
        </div>
        <div class="splash-button">
                <div><%= link_to "Sign Up", new_doctor_registration_path, class: "btn btn-primary sign-up" %></div>
                <div><%= link_to "Log In", new_doctor_session_path, class: "btn btn-primary log-in" %></div>

        </div>
    </section>

</div>
    </div>
  );
};

export default HomeScreen;
