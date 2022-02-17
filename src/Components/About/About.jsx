import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="Container">
      <div className="ProjectContent">
        <h2>EKATHERINE ZABAKHIDZE</h2>
        <div className="AboutContainer">
          <div className="Education">
            <h3>Education</h3>
            <div className="EduList">
              <h4>TBC ITAcademy (from 10/2020 to 03/2021)</h4>
              <ul>
                <li>Front-End Development Angular</li>
              </ul>
              <hr />
              <h4>Free University (from 09/2016 to 06/2020)</h4>
              <ul>
                <li>Bachelor of Electrical and Computer Engineering</li>
              </ul>
              <hr />
              <h4>
                N199 Komarovi High School of Mathematics and Physics (from
                09/2010 to 06/2016)
              </h4>
              <ul>
                <li>
                  Advanced classes in Mathematics, Physics and Computer Science
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="WorkExperience">
            <h3>Work Experience</h3>
            <div className="WorkList">
              <ul>
                <li>
                  Junior Angular developer at Orient Logic{"  "}
                  <span> (from 01/2022-current)</span>
                </li>
                <li>
                  Front-end Intern at Orient Logic{"  "}
                  <span> (from 07/2021-12/2021)</span>
                </li>
                <li>
                  Tutor in Mathematics and Physics{"   "}
                  <span> (from 03/2017-current)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
