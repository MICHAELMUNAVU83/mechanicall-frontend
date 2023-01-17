import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context";

import "./Login.css";

function Login() {
  const { loginFunction, username, setUsername, password, setPassword } =
    useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div class="container-fluid login-page">
        <div>
          <div class="form-group d-flex justify-content-center">
            <div class="d-flex flex-column">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div class="form-group d-flex justify-content-center">
            <div class="d-flex flex-column">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div
            class="d-flex justify-content-between"
            style={{ height: "40px" }}
          >
            <div class="d-flex justify-content-start">
              <button
                onClick={() => {
                  loginFunction();
                  navigate("/");
                }}
                class="btn btn-primary btn-sm align-self-center"
              >
                Login
              </button>
            </div>
            <div class="d-flex justify-content-start">
              <p class="line"></p> <p class="mt-3 align-self-center">or</p>{" "}
              <p class="line"></p>
            </div>
            <div class="d-flex justify-content-start">
              <Link to="/" class="btn btn-primary btn-sm align-self-center">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
