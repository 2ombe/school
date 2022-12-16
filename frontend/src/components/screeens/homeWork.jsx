import React, { useState } from "react";

export default function HomeWork() {
  const [data, setData] = useState({
    date: Date.now(),
    school: "",
    classes: "",
    subject: "",
    unit: "",
    title: "",
    question: [{}],
  });

  const createHomework = () => {
    fetch("/homework", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        date: Date.now(),
        school: data.school,
        classes: data.classes,
        subject: data.subject,
        unit: data.unit,
        title: data.title,
        question: data.question,
      }),
    });
  };

  return (
    <div style={{ margin: "auto", width: "50%" }} className="row">
      <form className="col s12">
        <div className="input-field ">
          <input
            placeholder="date"
            id="date"
            value={data.date}
            onChange={(e) => setData(e.target.value)}
            type="date"
            className="validate"
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="school"
            id="school"
            value={data.school}
            onChange={(e) => setData(e.target.value)}
            type="text"
            className="validate"
          />
          <label htmlFor="school">School</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="classes"
            id="classes"
            value={data.classes}
            onChange={(e) => setData(e.target.value)}
            type="text"
            className="validate"
          />
          <label htmlFor="classes">Class</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="subject"
            id="subject"
            type="text"
            value={data.subject}
            onChange={(e) => setData(e.target.value)}
            className="validate"
          />
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="unit"
            id="unit"
            value={data.unit}
            onChange={(e) => setData(e.target.value)}
            type="text"
            className="validate"
          />
          <label htmlFor="unit">Unit</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="title"
            value={data.title}
            onChange={(e) => setData(e.target.value)}
            id="title"
            type="text"
            className="validate"
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-field ">
          <input
            placeholder="question"
            value={data.question}
            onChange={(e) => setData(e.target.value)}
            id="question"
            type="text"
            className="validate"
          />
          <label htmlFor="question">question</label>
        </div>

        <button onClick={() => createHomework()} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
