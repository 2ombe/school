import React from "react";
import { useState } from "react";
import M from "materialize-css";

export default function Permission() {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    reason: "",
    from: "",
    to: "",
    parent: "",
  });

  const postData = () => {
    fetch("/permission", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        reason: data.reason,
        from: data.from,
        to: data.to,
        parent: data.parent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({ html: "report created" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <form style={{ width: "50%", margin: "auto" }} className="card">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="firstName"
              id="firstName"
              value={data.firstName}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="firstName"
            />
            <label htmlFor="firstName">First name</label>
            <input
              placeholder="middleName"
              id="middleName"
              value={data.middleName}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="middleName"
            />
            <label htmlFor="middleName">middle name</label>
            <input
              placeholder="lastName"
              value={data.lastName}
              onChange={(e) => setData(e.target.value)}
              id="lastName"
              type="text"
              className="lastName"
            />
            <label htmlFor="last_name">last_name</label>
            <input
              placeholder="reason"
              id="reason"
              value={data.reason}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="reason"
            />
            <label htmlFor="reason">reason</label>
            <input
              placeholder="from"
              id="from"
              value={data.from}
              setData={(e) => setData(e.target.value)}
              type="date"
              className="from"
            />
            <label htmlFor="from">from:</label>
            <input
              placeholder="to"
              id="to"
              value={data.to}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="to"
            />
            <label htmlFor="to">to</label>
            <input
              placeholder="parent"
              id="parent"
              value={data.parent.name}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="parent"
            />
            <label htmlFor="parent">parent name</label>
          </div>
        </div>
        <button onClick={() => postData()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
