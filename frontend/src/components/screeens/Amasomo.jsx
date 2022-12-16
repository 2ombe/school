import React from "react";

export default function Amasomo() {
  return (
    <div>
      <table>
        <thead>
          <th>Term</th>
          <th>Date</th>
          <th>Subject</th>
          <th>Class</th>
          <th>Unit n*</th>
          <th>Lesson</th>
          <th>Lesson n*</th>
          <th>Duration</th>
          <th>Class Size</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12/11/2022</td>
            <td>chemistry</td>
            <td>s1A</td>
            <td>4</td>
            <td>unit 1</td>
            <td>chemical change</td>
            <td>2 hours</td>
            <td>45</td>
          </tr>
          <tr>
            <td colSpan={4}>
              Types of special education needs to be cetered for in in the
              lessonand number of learners in this category
            </td>
            <td colSpan={5}>
              <table colSpan={5}>
                <tr>
                  <td>type of need</td>

                  <td>Number</td>
                </tr>
                <tr>
                  <td>special needs</td>
                  <td>3</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Unit title</td>
            <td colSpan={7}>chemical changed</td>
          </tr>
          <tr>
            <td colSpan={2}>Key Unit Competence:</td>
            <td colSpan={7}> key elements tobe added</td>
          </tr>
          <tr>
            <td colSpan={2}>Title of the Lesson:</td>
            <td colSpan={7}>Chemistry</td>
          </tr>
          <tr>
            <td>Instructional Objectives</td>
            <td style={{ border: "none" }} colSpan={8}>
              <tr style={{ border: "none" }}>
                <ul>
                  <th style={{ border: "none" }}>a) Knowledge and skills</th>
                  <li>Simple Calculations</li>
                  <li>Simple Calculations</li>
                  <li>Simple Calculations</li>
                </ul>
              </tr>

              <tr style={{ border: "none" }}>
                <ul>
                  <th style={{ border: "none" }}>b) skills</th>
                  <li>writting</li>
                  <li>Speaking</li>
                  <li>Lestening</li>
                </ul>
              </tr>

              <tr style={{ border: "none" }}>
                <ul>
                  <th style={{ border: "none" }}>c) Attitudes and values</th>
                  <li>cooraporation</li>
                  <li>Leadership</li>
                  <li>Problem solving</li>
                </ul>
              </tr>
            </td>
          </tr>
          <tr>
            <td>Plan for this Class (location: in / outside)</td>
            <td colSpan={8}>ds</td>
          </tr>
          <tr>
            <td>Learning Materials (for all learners)</td>
            <td colSpan={8}>
              <ul>
                <li>books</li>
                <li>books</li>
                <li>books</li>
                <li>books</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>References</td>
            <td colSpan={8}>
              <ul>
                <li>new culculum books</li>
                <li>new culculum books</li>
                <li>new culculum books</li>
                <li>new culculum books</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* table2 */}

      <table>
        <tbody>
          <td>Timing for each step</td>
          <td>
            <table>
              <tr>Description of teaching and learning activity</tr>
              <tr>place descreption here</tr>
              <tr>
                <td>Teacher activities</td>
                <td>Learner activities</td>
              </tr>
            </table>
          </td>
          <td>
            Generic competences and cross cutting issues to be addressed + a
            short explanation
          </td>
          <tr>
            <td>Introduction …min</td>
            <td>j</td>
            <td>i</td>
          </tr>
          <tr>
            <td>Introduction …min</td>
            <td>j</td>
            <td>i</td>
          </tr>
          <tr>
            <td>Introduction …min</td>
            <td>j</td>
            <td>i</td>
          </tr>
          <tr>
            <td>Teacher self- evaluation</td>
            <td colSpan={2}>lolo</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <h6>Note:Instructional Objectives</h6>
        <ol>
          <li>
            Are set by the teacher based on learning objectives from the scheme
            of work and adapted to the lesson to be delivered.
          </li>
          <li>Need to be inclusive to reflect needs of the whole class</li>
          <li>
            Focuses on the 5 elements of an instructional objective (conditions,
            who, action/behavior, content, standard/criteria for acceptable
            performance).
          </li>
        </ol>
      </footer>
    </div>
  );
}
