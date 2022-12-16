import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

export default function RegisterStudents() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    level: "",
    birth: "",
    photo: "",
    files: "",
    currentSchool: "",
  });

  const registerHandler = () => {
    fetch("/studentreg", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        level: data.level,
        birth: data.birth,
        photo: data.photo,
        files: data.files,
        currentSchool: data.currentSchool,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({
            html: "Student Registered",
            classes: "#1b5e20 green darken-4",
          });
          navigate("/plan");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div style={{ margin: "auto", width: "50%" }} className="row">
        <form className="col s12">
          <div className="input-field ">
            <input
              placeholder="first name"
              id="first_name"
              value={data.firstName}
              onChange={(e) => setdata(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="middle name"
              id="middle_name"
              value={data.middleName}
              onChange={(e) => setdata(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Middle Name</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="last name"
              id="middle_name"
              value={data.lastName}
              onChange={(e) => setdata(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Last Name</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="date of birth"
              id="date_birth"
              type="date"
              value={data.birth}
              onChange={(e) => setdata(e.target.value)}
              className="validate"
            />
            <label htmlFor="date_birth">Date of Birth</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="level"
              id="level"
              value={data.level}
              onChange={(e) => setdata(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="level">education level</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="previus_school"
              value={data.currentSchool}
              onChange={(e) => setdata(e.target.value)}
              id="previous_school"
              type="text"
              className="validate"
            />
            <label htmlFor="previous_school">previous school</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="photo"
              value={data.photo}
              onChange={(e) => setdata(e.target.value)}
              id="photo"
              type="text"
              className="validate"
            />
            <label htmlFor="photo">Photo</label>
          </div>
          <div className="input-field ">
            <input
              placeholder="Suppoting documents"
              value={data.files}
              onChange={(e) => setdata(e.target.value)}
              id="docs"
              type="text"
              className="validate"
            />
            <label for="docs">supporting documents</label>
          </div>
          <button onClick={() => registerHandler()} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
