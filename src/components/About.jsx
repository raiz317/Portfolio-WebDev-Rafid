import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WebhookIcon from '@mui/icons-material/Webhook';

function About() {
    return <section id="about" className="about">
        <div className="resume-identity">
            <h2>About Me</h2>
            <p>An Information Systems student focusing on backend development using Node.js. Experienced in building web-based inventory management applications using the EJS template engine, PostgreSQL relational database architecture, and Passport.js security system. Internship experience in application development with Laravel, and familiarity with optimizing coding efficiency and solving technical problems using AI-assisted tools (Google Gemini, ChatGPT).</p>
        </div>
        <div className="edu-tech">
            <div className="education">
                <h3><SchoolIcon />Education</h3>
                <p className="school">Universitas Singaperbangsa Karawang</p>
                <p>Program Studi: Sistem Informasi (2023 - Now)</p>
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