import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h3>Rafid Faiz Putra</h3>
                <p>&copy; {new Date().getFullYear()} Rafid Faiz Putra. Built with Architectural Integrity.</p>
            </div>
            <div className="footer-links">
                <a href="https://github.com/raiz317" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/rafid-faiz/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                </a>
                <a href="mailto:raizzzptr@gmail.com/" target="_blank" rel="noopener noreferrer">
                    Email
                </a>
            </div>
        </footer>
    );
}

export default Footer;