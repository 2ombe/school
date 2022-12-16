import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import "../navbar.css";
export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const fetchData = () => {
    fetch("auth/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({ html: data.message, classes: "#1b5e20 green darken-4" });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mycard">
        <div className="card auth-card input-field">
          <h2>School</h2>
          <input
            type="text"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => fetchData()}
            className="btn waves-effect darken-1 #2979ff blue accent-3"
          >
            SignUP
          </button>
          <h6>
            <Link to="/login">back to login</Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
