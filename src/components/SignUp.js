import {  useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
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
    <div className="App">
      <h1>Create new user</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={signUpFunction}>Sign up</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignUp;
