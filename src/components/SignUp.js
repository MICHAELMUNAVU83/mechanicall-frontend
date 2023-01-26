import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineLock} from 'react-icons/ai'



function SignUp() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    signUpFunction,
  } = useContext(UserContext);

  

  return (
    <section className="vh-100" style={{ backgroundColor: "#FFFFFF" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                      <AiOutlineUser className="me-3 fa-fw" style={{fontSize:"20px"}}/>
                        <div class="form-outline flex-fill mb-0">
                          <label for="username">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                      <AiOutlineMail className="me-3 fa-fw" style={{fontSize:"20px"}}/>
                        <div class="form-outline flex-fill mb-0">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                      <AiOutlineLock className="me-3 fa-fw" style={{fontSize:"20px"}}/>
                        <div class="form-outline flex-fill mb-0">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg"
                          onClick={signUpFunction}
                        >
                          Sign up
                        </button>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          class="form-check-label ms-2"
                          for="form2Example3"
                        >
                          Log in
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      class="img-fluid"
                      alt="login"
                      style={{ height: "500px", width: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
