import React from 'react';
import fotoProjectStock from "../assets/Instockflow.png";
import fotoProjectProp from "../assets/homepage.png";

function Project() {
    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2>Featured Projects</h2>
                <div className="header-line"></div>
                <div className="projects-detail">
                    <div className="project-card">
                        <div className="project-image">
                            <a
                                href="https://github.com/raiz317/integrated-inventory-system.git"
                                target="_blank"
                            >
                                <img src={fotoProjectStock} alt="Project Thumbnail" />
                            </a>
                        </div>
                        <div className="project-info">
                            <h3>
                                Integrated Inventory Management and Supplier Relationship System
                            </h3>
                            <p className="project-desc">
                                A web-based application designed to simplify inventory
                                management and centralize supplier relationship data. This
                                project focuses on efficient data management, fast server-side
                                processing, and high security standards to protect user data and
                                credentials.
                            </p>
                            <div className="project-features-list">
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m18 16 4 4" />
                                            <path d="m6 8-4 4" />
                                            <path d="m14.5 13.5-5-5" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M19.42 10.42a8.5 8.5 0 0 0-14.84 0" />
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Backend Architecture</h4>
                                        <p>
                                            Built with Node.js/Express with a modular router structure
                                            for scalability.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Advanced Auth</h4>
                                        <p>
                                            Secure session handling via Passport.js and Bcrypt for
                                            enterprise-grade encryption.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
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
                                    <div className="feature-text">
                                        <h4>PostgreSQL Schema</h4>
                                        <p>
                                            Relational modeling ensuring data integrity across complex
                                            supplier and item relationships.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-tech-stack">
                                <p>RESTful API</p>
                                <p>EJS Templates</p>
                                <p>Bootstrap 5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-detail">
                    <div className="project-card">
                        <div className="project-image">
                            <a
                                href="https://github.com/raiz317/Web_Property.git"
                                target="_blank"
                            >
                                <img src={fotoProjectProp} alt="Project Thumbnail" />
                            </a>
                        </div>
                        <div className="project-info">
                            <h3>Property Sales Website</h3>
                            <p className="project-desc">
                                This website is an independent project developed during an
                                internship at the Communication, Informatics, Statistics, and
                                Encoding Office (Diskominfosantik) of Bekasi Regency with the
                                assistance of AI. This project aims to digitalize property
                                marketing to make it more structured and accessible.
                            </p>
                            <div className="project-features-list">
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m18 16 4 4" />
                                            <path d="m6 8-4 4" />
                                            <path d="m14.5 13.5-5-5" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M19.42 10.42a8.5 8.5 0 0 0-14.84 0" />
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Backend Architecture</h4>
                                        <p>
                                            Built with Laravel Framework following a structured
                                            Model-View-Controller (MVC) architecture to cleanly
                                            separate business logic, data management, and user
                                            interface elements.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Advanced Auth</h4>
                                        <p>
                                            Secure authentication system powered by Laravel's built-in
                                            session guards and Eloquent User providers, featuring safe
                                            registration and login interfaces with native Bcrypt
                                            password hashing.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box">
                                        <svg
                                            width="20"
                                            height="20"
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
                                    <div className="feature-text">
                                        <h4>MySQL Schema</h4>
                                        <p>
                                            Relational database modeling using Eloquent ORM to
                                            maintain strict data integrity across interconnected
                                            entities, including users, properties, contacts, and
                                            transaction tables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-tech-stack">
                                <p>RESTful API</p>
                                <p>Laravel Blade</p>
                                <p>Bootstrap 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;