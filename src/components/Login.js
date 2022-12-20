import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context";

function Login() {
  const { loginFunction, username, setUsername, password, setPassword } =
    useContext(UserContext);
  const navigate = useNavigate();

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
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          onClick={() => {
            loginFunction();
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
