import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import "../navbar.css";
import { UserContext } from "../../App";

export default function Login() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = () => {
    fetch("auth/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "login seccessfully",
            classes: "#1b5e20 green darken-4",
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>School</h2>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => login()}
          className="btn waves-effect darken-1 #2979ff blue accent-3"
        >
          Login
        </button>
        <h6>
          <Link to="/signup">create new account</Link>
        </h6>
      </div>
      <hr />
    </div>
  );
}
