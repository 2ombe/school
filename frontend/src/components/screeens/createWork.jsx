import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

export default function CreateWork() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [school, setSchool] = useState("");
  const [subject, setSubject] = useState("");
  const [classes, setClass] = useState("");
  const [periods, setPeriods] = useState("");
  const [teacher, setTeacher] = useState("");
  const [weeks, setWeeks] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [period, setPeriod] = useState("");
  const [unit, setUnit] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [skills, setSkills] = useState("");
  const [values, setValues] = useState("");
  const [methods, setMethods] = useState("");
  const [resources, setResources] = useState("");
  const [procedures, setProcedures] = useState("");
  const [observations, setObservations] = useState("");
  const [evaluations, setEvaluations] = useState("");
  const [comments, setComments] = useState("");

  const submitHandler = (e) => {
    fetch("/schema", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: title,
        academivyear: year,
        term: term,
        school: school,
        subject: subject,
        class: classes,
        periods: periods,
        teacher: teacher,
        weeks: weeks,
        from: from,
        to: to,
        period: period,
        unit: unit,
        knowledge: knowledge,
        skills: skills,
        values: values,
        teachingMethods: methods,
        resources: resources,
        procedures: procedures,
        observations: observations,
        evaluation: evaluations,
        comments: comments,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({ html: "post created", classes: "#1b5e20 green darken-4" });
          navigate("/schema");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create Schem of work</h2>
      <div
        onSubmit={submitHandler}
        style={{ width: "50%", margin: "auto" }}
        className="card "
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
        <label htmlFor="title">Title:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          name="year"
        />
        <label htmlFor="year">Academic Year:</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <label htmlFor="term">Term:</label>
        <input
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          type="text"
        />
        <label htmlFor="school">School Name:</label>

        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
        />
        <label htmlFor="subject">Subjects:</label>
        <input
          value={classes}
          onChange={(e) => setClass(e.target.value)}
          type="text"
        />
        <label htmlFor="class">Class:</label>
        {/* <input value={school} onChange={(e)=>setSchool(e.target.value)} type="text" />
        <label htmlFor="class">Class:</label> */}
        <input
          value={periods}
          onChange={(e) => setPeriods(e.target.value)}
          type="number"
        />
        <label htmlFor="periods">Periods/Week:</label>
        <input
          type="text"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
        <label htmlFor="teacher">Teacher:</label>
        <input
          value={weeks}
          onChange={(e) => setWeeks(e.target.value)}
          type="week"
        />
        <label htmlFor="weeks">Weeks:</label>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="time"
        />
        <label htmlFor="weeks">from:</label>
        <input value={to} onChange={(e) => setTo(e.target.value)} type="time" />
        <label htmlFor="ends">to:</label>
        <input
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          type="text"
        />
        <label htmlFor="period">Periods:</label>
        {/* <input value={school} onChange={(e)=>setSchool(e.target.value)} type="text" />
        <label htmlFor="period">Periods:</label> */}
        <input
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          type="text"
        />
        <label htmlFor="unit">Unit:</label>
        <input
          value={knowledge}
          onChange={(e) => setKnowledge(e.target.value)}
          type="text"
        />
        <label htmlFor="knowledge">Knowledge to be aquired:</label>
        <input
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          type="text"
        />
        <label htmlFor="skills">Skills:</label>
        <input
          value={values}
          onChange={(e) => setValues(e.target.value)}
          type="text"
        />
        <label htmlFor="values">Values:</label>
        <input
          value={methods}
          onChange={(e) => setMethods(e.target.value)}
          type="text"
        />
        <label htmlFor="methos">Teaching Methods:</label>
        <input
          value={resources}
          onChange={(e) => setResources(e.target.value)}
          type="text"
        />
        <label htmlFor="resources">Resources:</label>
        <input
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          type="text"
        />
        <label htmlFor="observations">Observations:</label>
        <input
          value={evaluations}
          onChange={(e) => setEvaluations(e.target.value)}
          type="text"
        />
        <label htmlFor="evaluatios">Evaluations:</label>
        <input
          value={procedures}
          onChange={(e) => setProcedures(e.target.value)}
          type="text"
        />
        <label htmlFor="procedures">Procedures:</label>
        <input
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          type="text"
        />
        <label htmlFor="comments">Comments:</label>
      </div>
      <button
        type="submit"
        onClick={() => submitHandler()}
        style={{ margin: "5rem", alignContent: "center" }}
        className="btn waves-effect waves-light darken-1 #2979ff blue"
      >
        Submit
      </button>
    </div>
  );
}
