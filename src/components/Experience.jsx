import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../data/data.json";

function Experience() {
  const experiences = data.experienceData;

  return (
    <section id="experience" className="experiences">
      <Fade duration={2000}>
        <div className="section-experience">
          <h2>My Experience</h2>
          <div className="header-line"></div>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-detail"
              style={{ marginBottom: "30px" }}
            >
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.period}</p>
              </div>
              <h4>{exp.company}</h4>

              <ul>
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

export default Experience;
