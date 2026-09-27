import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../data/data.json";

function Skill() {
  const { backend, databases, frontend, tools, interpersonal } =
    data.skillsData;
  return (
    <section id="skills" className="proficiency-section">
      <Fade duration={2000}>
        <div className="section-header">
          <h2>Tools and Technology</h2>
          <div className="header-line"></div>
        </div>

        <div className="proficiency-grid">
          <div className="prof-card card-backend">
            <div className="card-icon icon-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Backend & Security</h3>
            <div className="skills-progress-grid">
              {backend.map((item, index) => (
                <div key={index} className="progress-item">
                  <div
                    className="progress-info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span className="dot"></span>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="prof-card card-databases">
            <div className="card-icon icon-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
            </div>
            <h3>Databases</h3>
            <ul className="database-list">
              {databases.map((db, index) => (
                <li key={index}>
                  <span className="dot"></span> {db}
                </li>
              ))}
            </ul>
          </div>

          <div className="prof-card card-frontend">
            <div className="card-icon icon-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Frontend</h3>
            <div className="tags-container">
              {frontend.map((item, index) => (
                <span key={index} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="prof-card card-tools">
            <div className="card-icon icon-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3>Tools</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#4f46e5" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="prof-card card-interpersonal">
            <div className="card-icon icon-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
              </svg>
            </div>
            <h3>Interpersonal</h3>
            <ul className="interpersonal-list">
              {interpersonal.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
}
export default Skill;
