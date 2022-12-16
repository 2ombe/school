import React from "react";
import "../navbar.css";

export default function Profile() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "18px 0px",
        }}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile"
            className="profile"
          />
        </div>
        <div>
          <h5>Marks</h5>
        </div>
      </div>
      <div className="flex-container">
        <h6 className="box">20 module to complite</h6>
        <h6 className="box">40 new lesson</h6>
        <h6 className="box">6 teaching hours</h6>
        <h6 className="box">head teachers</h6>
        <h6 className="box">perfomances</h6>
      </div>
    </div>
  );
}
