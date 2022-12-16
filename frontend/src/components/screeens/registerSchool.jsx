import React from "react";
import { useState } from "react";
import M from "materialize-css";

export default function RegisterSchool() {
  const [data, setData] = useState({
    name: "",
    logo: "",
    country: "",
    city: "",
    province: "",
    district: "",
    village: "",
    sector: "",
    phone: "",
    email: "",
    website: "",
  });

  const postData = () => {
    fetch("/report", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name: data.name,
        logo: data.logo,
        country: data.country,
        city: data.city,
        province: data.province,
        village: data.village,
        sector: data.sector,
        phone: data.phone,
        email: data.email,
        website: data.website,
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
              placeholder="Placeholder"
              id="studentNames"
              value={data.name}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="studentNames"
            />
            <label htmlFor="studentNames">Shool name</label>
            <input
              placeholder="Placeholder"
              id="mistake"
              value={data.country}
              onChange={(e) => setData(e.target.value)}
              type="number"
              className="mistake"
            />
            <label htmlFor="mistake">Country</label>
            <input
              placeholder="news"
              value={data.city}
              onChange={(e) => setData(e.target.value)}
              id="city"
              type="text"
              className="city"
            />
            <label htmlFor="city">City</label>
            <input
              placeholder="province"
              id="province"
              value={data.province}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="province"
            />
            <label htmlFor="province">Province</label>
            <input
              placeholder="village"
              id="village"
              value={data.village}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="village"
            />
            <label htmlFor="village">Village</label>
            <input
              placeholder="sector"
              id="sector"
              value={data.sector}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="sector"
            />
            <label htmlFor="sector">Sector</label>
            <input
              placeholder="email"
              id="email"
              value={data.email}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="email"
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="phone"
              id="phone"
              value={data.phone}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="phone"
            />
            <label htmlFor="phone">phone</label>
            <input
              placeholder="website"
              id="website"
              value={data.website}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="website"
            />
            <label htmlFor="website">website</label>
          </div>
        </div>
        <button onClick={() => postData()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
