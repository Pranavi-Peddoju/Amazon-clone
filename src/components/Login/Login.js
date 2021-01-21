import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { auth } from "../../Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="data:image/png;base64,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"
          alt="amazon"
        ></img>
      </Link>
      <div className="login_container">
        <h2>Login</h2>
        <div>
          <form action="">
            <div className="formfield">
              <label>E-mail</label>
              <TextField
                className="formfield_input"
                fullWidth
                name="email"
                type="email"
                size="small"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formfield">
              <label>Password</label>
              <TextField
                fullWidth
                name="password"
                size="small"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={login}
              type="submit"
              className="login_signInButton"
            >
              Sign In
            </button>
          </form>
          <div className="login_agree">
            <div>
              <input className="checkbox" type="checkbox" />
            </div>
            <div>
              <label>
                By clicking the box & signing-in you agree to the AMAZON CLONE
                Conditions of Use & Sale.
              </label>
            </div>
          </div>
          <button onClick={register} className="login_registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
