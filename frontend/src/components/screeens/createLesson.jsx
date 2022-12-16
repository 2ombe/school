import React from "react";
import { useState } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

export default function CreateLesson() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    school: "",
    teacher: "",
    term: "",
    date: Date.now(),
    subject: "",
    classes: "",
    unit: "",
    lesson: "",
    skills: "",
    knowledge: "",
    values: "",
    plan: "",
    materials: "",
    referencies: "",
    description: "",
    teacheract: "",
    learerActs: "",
    genericCompetence: "",
    introMin: "",
    devMin: "",
    concMin: "",
    evaluation: "",
    note: "",
    numberNeeds: "",
    duration: "",
    needs: "",
    unitTitle: "",
    unitCompetence: "",
    lessonTitle: "",
  });

  const lessonPlanHandler = () => {
    fetch("/lesson", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: data.title,
        school: data.school,
        teacher: data.teacher,
        term: data.term,
        date: data.date,
        subject: data.subject,
        classes: data.classes,
        unit: data.unit,
        lesson: data.lesson,
        skills: data.lesson,
        knowledge: data.knowledge,
        values: data.values,
        plan: data.plan,
        materials: data.materials,
        referencies: data.referencies,
        description: data.description,
        teacheract: data.teacheract,
        learerActs: data.learerActs,
        genericCompetence: data.genericCompetence,
        introMin: data.introMin,
        devMin: data.devMin,
        concMin: data.concMin,
        evaluation: data.evaluation,
        note: data.note,
        numberNeeds: data.numberNeeds,
        duration: data.duration,
        needs: data.needs,
        unitTitle: data.unitTitle,
        unitCompetence: data.unitCompetence,
        lessonTitle: data.CreateLesson,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
          } else {
            M.toast({
              html: "Lesson plan created",
              classes: "#1b5e20 green darken-4",
            });
            navigate("/plan");
          }
        })
        .catch((error) => {
          console.log(error);
        }),
    });
  };

  return (
    <div style={{ margin: "auto", width: "50%" }} className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="title"
              id="title"
              value={data.title}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Title</label>
            <input
              placeholder="school"
              value={data.school}
              onChange={(e) => setData(e.target.value)}
              id="school"
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">School</label>
            <input
              placeholder="term"
              value={data.term}
              onChange={(e) => setData(e.target.value)}
              id="term"
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Term</label>
            <input
              placeholder="Date"
              id="date"
              value={data.date}
              onChange={(e) => setData(e.target.value)}
              type="date"
              className="validate"
            />
            <label htmlFor="date">Date</label>
            <input
              placeholder="Subject"
              id="subject"
              value={data.subject}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="subject">Subject</label>
            <input
              placeholder="Class"
              id="classe"
              value={data.classes}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="class">Class</label>
            <input
              placeholder="unit"
              id="unit"
              value={data.unit}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="unit">Unit</label>
            <input
              placeholder="lesson"
              id="lesson"
              value={data.lesson}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="lesson">Lesson</label>
            <input
              placeholder="skills"
              id="skills"
              value={data.skills}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="skills">Skills</label>
            <input
              placeholder="knowledge"
              value={data.knowledge}
              onChange={(e) => setData(e.target.value)}
              id="knowledge"
              type="text"
              className="validate"
            />
            <label htmlFor="knowledge">Knowledge</label>
            <input
              placeholder="values"
              value={data.values}
              onChange={(e) => setData(e.target.value)}
              id="values"
              type="text"
              className="validate"
            />
            <label htmlFor="values">Values</label>
            <input
              placeholder="plan"
              value={data.plan}
              onChange={(e) => setData(e.target.value)}
              id="plan"
              type="text"
              className="validate"
            />
            <label htmlFor="plan">Plan</label>

            <input
              placeholder="materials"
              id="materials"
              value={data.materials}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="References">materials</label>
            <input
              placeholder="References"
              id="References"
              value={data.referencies}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="materials">References</label>

            <input
              placeholder="teachingAct"
              id="teachingAct"
              value={data.teacheract}
              onChange={(e) => e.target.value}
              type="text"
              className="validate"
            />
            <label htmlFor="teachingAct">teachres activity</label>
            <input
              placeholder="learnersAct"
              value={data.learerActs}
              onChange={(e) => setData(e.target.value)}
              id="learnersAct"
              type="text"
              className="validate"
            />
            <label htmlFor="learnersAct">learners activity</label>
            <input
              placeholder="generic"
              id="generic"
              value={data.genericCompetence}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="generic">Generic competence</label>
            <input
              placeholder="introMin"
              value={data.introMin}
              onChange={(e) => setData(e.target.value)}
              id="introMin"
              type="time"
              className="validate"
            />
            <label htmlFor="introMin">Introduction minutes</label>
            <input
              placeholder="devMin"
              value={data.devMin}
              onChange={(e) => setData(e.target.value)}
              id="devMin"
              type="time"
              className="validate"
            />
            <label htmlFor="devMin">development minutes</label>
            <input
              placeholder="concMin"
              value={data.concMin}
              onChange={(e) => setData(e.target.value)}
              id="concMin"
              type="time"
              className="validate"
            />
            <label htmlFor="concMin">conculsion minutes</label>
            <input
              placeholder="evaluation"
              value={data.evaluation}
              onChange={(e) => setData(e.target.value)}
              id="evaluation"
              type="text"
              className="validate"
            />
            <label htmlFor="evaluation">Evaluation</label>
            <input
              placeholder="notes"
              value={data.note}
              onChange={(e) => setData(e.target.value)}
              id="notes"
              type="text"
              className="validate"
            />
            <label htmlFor="notes">notes</label>
            <input
              placeholder="numberNeeds"
              id="numberNeeds"
              value={data.numberNeeds}
              onChange={(e) => setData(e.target.value)}
              type="number"
              className="validate"
            />
            <label htmlFor="numberNeeds">
              Number of children with special needs
            </label>
            <input
              placeholder="duration"
              id="duration"
              value={data.duration}
              onChange={(e) => setData(e.target.value)}
              type="number"
              className="validate"
            />
            <label htmlFor="duration">duration</label>
            <input
              placeholder="needs"
              value={data.needs}
              onChange={(e) => setData(e.target.value)}
              id="needs"
              type="text"
              className="validate"
            />
            <label htmlFor="needs">type of needs</label>
            <input
              placeholder="unitTitle"
              value={data.unitTitle}
              onChange={(e) => setData(e.target.value)}
              id="unitTitle"
              type="text"
              className="validate"
            />
            <label htmlFor="unitTitle">unit title</label>
            <input
              placeholder="unitCompetence"
              value={data.unitCompetence}
              onChange={(e) => setData(e.target.value)}
              id="unitCompetence"
              type="text"
              className="validate"
            />
            <label htmlFor="unitCompetence">unit competence</label>
            <input
              placeholder="lessonTitle"
              value={data.lessonTitle}
              onChange={(e) => setData(e.target.value)}
              id="lessonTitle"
              type="text"
              className="validate"
            />
            <label htmlFor="lessonTitle">Lesson title</label>
          </div>
        </div>
        <button onClick={() => lessonPlanHandler()} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
