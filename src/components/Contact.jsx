import React from "react";
import { Fade } from "react-awesome-reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import data from "../data/data.json";

function Contact() {
  const { heading, subheading, email, githubUrl, linkedinUrl, whatsappUrl } =
    data.contactData;

  return (
    <section id="contact" className="contact-section">
      <Fade duration={2000}>
        <div className="card-info">
          <h2>{heading}</h2>
          <p>{subheading}</p>
          <div className="contact-links">
            <a className="links email" href={`mailto:${email}`}>
              <EmailIcon />
              {email}
            </a>
            <a
              className="links"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="links"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              className="links"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Contact;
