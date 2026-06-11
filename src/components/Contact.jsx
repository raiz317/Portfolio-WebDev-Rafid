import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="card-info">
                <h2>Let's build something scalable.</h2>
                <p>Available for backend development opportunities, open-source collaborations, or technical consultations.</p>
                <div className="contact-links">
                    <a className='links email' href="mailto:raizzzptr@gmail.com"><EmailIcon />raizzzptr@gmail.com</a>
                    <a className='links' href="https://github.com/raiz317" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a className='links' href="https://www.linkedin.com/in/rafid-faiz/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;