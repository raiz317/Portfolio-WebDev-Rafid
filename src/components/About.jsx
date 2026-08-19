import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WebhookIcon from '@mui/icons-material/Webhook';

function About() {
    return <section id="about" className="about">
        <div className="resume-identity">
            <h2>About Me</h2>
            <p>An Information Systems student specializing in Full-Stack and Backend Development using Node.js (Express.js) and Laravel.
                Possesses practical experience as a Web Developer Intern at Diskominfosantik Bekasi Regency, with expertise in designing business logic flows
                and relational database schemas (ERD), as well as building a property sales web platform.
                Additionally, successfully developed a personal project—an integrated full-stack Inventory & Supplier Relationship Management System—using PostgreSQL, Passport.js, Bcrypt, EJS, and Bootstrap.
                Skilled in optimizing the entire application development lifecycle through Black-box Testing and leveraging AI-assisted tools (Google Gemini, ChatGPT) to enhance coding efficiency and technical problem-solving.</p>
        </div>
        <div className="edu-tech">
            <div className="education">
                <h3><SchoolIcon />Education</h3>
                <p className="school">Universitas Singaperbangsa Karawang</p>
                <p>Program Studi: Sistem Informasi (Sep 2023 - Present)</p>
            </div>
            <div className="stack">
                <p><WebhookIcon />Current Stack Focus</p>
                <div className="tech-stack">
                    <p className="tech-detail">Node.js</p>
                    <p className="tech-detail">PostgreSQL</p>
                    <p className="tech-detail">Passport.js</p>
                    <p className="tech-detail">AI Tools</p>
                </div>
            </div>

        </div>
    </section>
}

export default About;