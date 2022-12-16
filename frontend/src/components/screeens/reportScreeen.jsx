import React from "react";
import { useState } from "react";
import M from "materialize-css";

export default function ReportScreen() {
  const [data, setData] = useState({
    studentNames: "",
    mistakes: "",
    news: "",
    subject: "",
    marks: "",
  });

  const postData = () => {
    fetch("/report", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        studentNames: data.studentNames,
        mistakes: data.mistakes,
        news: data.news,
        subject: data.subject,
        marks: data.marks,
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
              value={data.studentNames}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="studentNames"
            />
            <label htmlFor="studentNames">student names</label>
            <input
              placeholder="Placeholder"
              id="mistake"
              value={data.mistakes}
              onChange={(e) => setData(e.target.value)}
              type="number"
              className="mistake"
            />
            <label htmlFor="mistake">Mistakes</label>
            <input
              placeholder="news"
              value={data.news}
              onChange={(e) => setData(e.target.value)}
              id="news"
              type="text"
              className="news"
            />
            <label htmlFor="news">news</label>
            <input
              placeholder="news"
              id="news"
              value={data.subject}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="news"
            />
            <label htmlFor="news">news</label>
            <input
              placeholder="marks"
              id="marks"
              value={data.marks}
              setData={(e) => setData(e.target.value)}
              type="text"
              className="marks"
            />
            <label htmlFor="marks">marks</label>
          </div>
        </div>
        <button onClick={() => postData()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
