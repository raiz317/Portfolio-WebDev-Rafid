import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WebhookIcon from '@mui/icons-material/Webhook';

function About() {
    return <section id="about" className="about">
        <div className="resume-identity">
            <h2>About Me</h2>
            <p>An Information Systems student specializing in Full-Stack and Backend Development using Node.js (Express.js), Laravel and React.js (Vite).
                Experienced in building a property sales web platform using the Laravel framework and MySQL,
                as well as an inventory management system integrated via RESTful APIs using React.js and Express.js.
                Skilled in optimizing development workflows and writing efficient code by leveraging AI-powered tools (Google Gemini, ChatGPT).</p>
        </div>
        <div className="edu-tech">
            <div className="education">
                <h3><SchoolIcon />Education</h3>
                <p className="school">Universitas Singaperbangsa Karawang</p>
                <p>Information System (Sep 2023 - Present)</p>
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