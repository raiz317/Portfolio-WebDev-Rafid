import React from "react";
import data from "../data/data.json";

function Footer() {
  const { name, githubUrl, linkedinUrl, email } = data.footerData;

  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>{name}</h3>
        <p>
          &copy; {new Date().getFullYear()} {name}. Built with Architectural
          Integrity.
        </p>
      </div>
      <div className="footer-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
