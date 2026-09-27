import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../data/data.json";

function Project() {
  const projects = data.projectsData;

  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  return (
    <section id="projects" className="projects">
      <Fade duration={2000}>
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="projects-detail" key={project.id}>
                <div className="project-card">
                  <div className="project-image">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={getImageUrl(project.imageName)}
                        alt="Project Thumbnail"
                      />
                    </a>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-tech-stack">
                      {project.techStack.map((tech, index) => (
                        <p key={index}>{tech}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Project;
