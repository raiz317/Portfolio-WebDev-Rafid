import React from "react";
import { Fade } from "react-awesome-reveal";
import SchoolIcon from "@mui/icons-material/School";
import WebhookIcon from "@mui/icons-material/Webhook";
import data from "../data/data.json";

function About() {
  const { bio, education, techStackFocus } = data.aboutData;
  return (
    <section id="about" className="about">
      <Fade duration={2000}>
        <div className="resume-identity">
          <h2>About Me</h2>
          <p>{bio}</p>
        </div>
        <div className="edu-tech">
          <div className="education">
            <h3>
              <SchoolIcon />
              Education
            </h3>
            <p className="school">{education.school}</p>
            <p>
              {education.major} ({education.period})
            </p>
          </div>
          <div className="stack">
            <p>
              <WebhookIcon />
              Current Stack Focus
            </p>
            <div className="tech-stack">
              {techStackFocus.map((tech, index) => (
                <p key={index} className="tech-detail">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
