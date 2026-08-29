import React from 'react';
import { Fade } from "react-awesome-reveal";

function Experience() {
    return (
        <section id="experience" className="experiences">
            <Fade duration={2000} triggerOnce>
                <div className="section-experience">
                    <h2>My Experience</h2>
                    <div className="header-line"></div>
                    <div className='experience-detail'>
                        <div>
                            <h3>Web Developer Intern</h3>
                            <p>Nov 2025 - Des 2025</p>
                        </div>
                        <h4>Diskominfosantik Kabupaten Bekasi</h4>
                        <ul>
                            <li>Designing business logic flows, relational database schemas (ERD), interaction diagrams (Use Cases),
                                and interface prototypes for a property sales web platform.</li>
                            <li>Accelerate application development cycle efficiency by implementing AI-driven development methods
                                (Vibe Coding) within the Laravel framework to build CRUD features, user authentication, and admin dashboards.</li>
                            <li>Execute system testing using the black-box testing method to ensure
                                the successful functionality of all features and verify they are bug-free.
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Experience;